import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { Role, ReservationStatus, Prisma } from "@prisma/client";

const reservationSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  petId: z.string(),
  kennelId: z.string(),
  addOnServiceIds: z.array(z.string()).optional(),
});

export const reservationRouter = createTRPCRouter({
  getAll: protectedProcedure
    .input(
      z.object({
        status: z.enum([
          "PENDING",
          "CONFIRMED",
          "CHECKED_IN",
          "CHECKED_OUT",
          "CANCELLED",
        ]).optional(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
      }).optional()
    )
    .query(async ({ ctx, input }) => {
      const where: Prisma.ReservationWhereInput = {
        deletedAt: null,
      };

      if (input?.status) {
        where.status = input.status;
      }

      if (input?.startDate) {
        where.startDate = {
          gte: input.startDate,
        };
      }

      if (input?.endDate) {
        where.endDate = {
          lte: input.endDate,
        };
      }

      // Filter based on user role
      if (ctx.session.user.role === Role.PET_OWNER) {
        where.userId = ctx.session.user.id;
      }

      return ctx.prisma.reservation.findMany({
        where,
        include: {
          pet: true,
          kennel: true,
          payment: true,
          addOnServices: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: {
          startDate: "asc",
        },
      });
    }),

  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const reservation = await ctx.prisma.reservation.findUnique({
        where: { id: input },
        include: {
          pet: true,
          kennel: true,
          payment: true,
          addOnServices: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

      if (!reservation) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Reservation not found",
        });
      }

      // Check authorization
      if (
        reservation.userId !== ctx.session.user.id &&
        ![Role.ADMIN, Role.STAFF, Role.MANAGER].includes(ctx.session.user.role)
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to view this reservation",
        });
      }

      return reservation;
    }),

  create: protectedProcedure
    .input(reservationSchema)
    .mutation(async ({ ctx, input }) => {
      // Validate dates
      if (input.startDate >= input.endDate) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "End date must be after start date",
        });
      }

      // Check if pet belongs to user
      const pet = await ctx.prisma.pet.findUnique({
        where: { id: input.petId },
      });

      if (!pet || (pet.ownerId !== ctx.session.user.id && ctx.session.user.role === Role.PET_OWNER)) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to create reservation for this pet",
        });
      }

      // Check kennel availability
      const conflictingReservation = await ctx.prisma.reservation.findFirst({
        where: {
          kennelId: input.kennelId,
          status: {
            in: ["PENDING", "CONFIRMED", "CHECKED_IN"],
          },
          OR: [
            {
              startDate: {
                lte: input.endDate,
              },
              endDate: {
                gte: input.startDate,
              },
            },
          ],
          deletedAt: null,
        },
      });

      if (conflictingReservation) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Kennel is not available for the selected dates",
        });
      }

      // Calculate total price
      const kennel = await ctx.prisma.kennel.findUnique({
        where: { id: input.kennelId },
      });

      if (!kennel) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Kennel not found",
        });
      }

      let totalPrice = kennel.price;

      // Add prices for additional services
      if (input.addOnServiceIds && input.addOnServiceIds.length > 0) {
        const addOnServices = await ctx.prisma.addOnService.findMany({
          where: {
            id: {
              in: input.addOnServiceIds,
            },
          },
        });

        totalPrice += addOnServices.reduce((sum, service) => sum + service.price, 0);
      }

      // Create reservation with pending payment
      return ctx.prisma.reservation.create({
        data: {
          startDate: input.startDate,
          endDate: input.endDate,
          status: ReservationStatus.PENDING,
          pet: {
            connect: { id: input.petId },
          },
          kennel: {
            connect: { id: input.kennelId },
          },
          user: {
            connect: { id: ctx.session.user.id },
          },
          addOnServices: input.addOnServiceIds
            ? {
                connect: input.addOnServiceIds.map((id) => ({ id })),
              }
            : undefined,
          payment: {
            create: {
              amount: totalPrice,
              status: "PENDING",
              user: {
                connect: { id: ctx.session.user.id },
              },
            },
          },
        },
        include: {
          pet: true,
          kennel: true,
          payment: true,
          addOnServices: true,
        },
      });
    }),

  updateStatus: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.enum([
          "PENDING",
          "CONFIRMED",
          "CHECKED_IN",
          "CHECKED_OUT",
          "CANCELLED",
        ]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const reservation = await ctx.prisma.reservation.findUnique({
        where: { id: input.id },
        include: {
          payment: true,
        },
      });

      if (!reservation) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Reservation not found",
        });
      }

      // Check authorization
      if (
        reservation.userId !== ctx.session.user.id &&
        ![Role.ADMIN, Role.STAFF, Role.MANAGER].includes(ctx.session.user.role)
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to update this reservation",
        });
      }

      // Validate status transition
      if (input.status === "CONFIRMED" && reservation.payment?.status !== "PAID") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot confirm reservation without payment",
        });
      }

      return ctx.prisma.reservation.update({
        where: { id: input.id },
        data: {
          status: input.status,
        },
        include: {
          pet: true,
          kennel: true,
          payment: true,
          addOnServices: true,
        },
      });
    }),

  cancel: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const reservation = await ctx.prisma.reservation.findUnique({
        where: { id: input },
      });

      if (!reservation) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Reservation not found",
        });
      }

      // Check authorization
      if (
        reservation.userId !== ctx.session.user.id &&
        ![Role.ADMIN, Role.MANAGER].includes(ctx.session.user.role)
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to cancel this reservation",
        });
      }

      // Cannot cancel after check-in
      if (reservation.status === "CHECKED_IN") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot cancel reservation after check-in",
        });
      }

      return ctx.prisma.reservation.update({
        where: { id: input },
        data: {
          status: "CANCELLED",
          deletedAt: new Date(),
        },
      });
    }),
});
