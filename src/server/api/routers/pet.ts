import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { Role } from "@prisma/client";

const petSchema = z.object({
  name: z.string().min(1, "Name is required"),
  breed: z.string().min(1, "Breed is required"),
  age: z.number().min(0, "Age must be a positive number"),
  medicalInfo: z.string().optional(),
  dietaryNeeds: z.string().optional(),
});

export const petRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    // Only admin and staff can view all pets
    if (![Role.ADMIN, Role.STAFF, Role.MANAGER].includes(ctx.session.user.role)) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Not authorized to view all pets",
      });
    }

    return ctx.prisma.pet.findMany({
      where: { deletedAt: null },
      include: {
        owner: true,
        vaccinations: true,
      },
    });
  }),

  getByOwnerId: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.pet.findMany({
      where: {
        ownerId: ctx.session.user.id,
        deletedAt: null,
      },
      include: {
        vaccinations: true,
      },
    });
  }),

  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const pet = await ctx.prisma.pet.findUnique({
        where: { id: input },
        include: {
          owner: true,
          vaccinations: true,
          reservations: {
            include: {
              kennel: true,
              payment: true,
            },
          },
        },
      });

      if (!pet) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Pet not found",
        });
      }

      // Check if user is authorized to view this pet
      if (
        pet.ownerId !== ctx.session.user.id &&
        ![Role.ADMIN, Role.STAFF, Role.MANAGER].includes(ctx.session.user.role)
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to view this pet",
        });
      }

      return pet;
    }),

  create: protectedProcedure
    .input(petSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.pet.create({
        data: {
          ...input,
          owner: {
            connect: { id: ctx.session.user.id },
          },
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: petSchema.partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const pet = await ctx.prisma.pet.findUnique({
        where: { id: input.id },
      });

      if (!pet) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Pet not found",
        });
      }

      // Check if user is authorized to update this pet
      if (
        pet.ownerId !== ctx.session.user.id &&
        ![Role.ADMIN, Role.MANAGER].includes(ctx.session.user.role)
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to update this pet",
        });
      }

      return ctx.prisma.pet.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const pet = await ctx.prisma.pet.findUnique({
        where: { id: input },
      });

      if (!pet) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Pet not found",
        });
      }

      // Check if user is authorized to delete this pet
      if (
        pet.ownerId !== ctx.session.user.id &&
        ![Role.ADMIN, Role.MANAGER].includes(ctx.session.user.role)
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to delete this pet",
        });
      }

      // Soft delete
      return ctx.prisma.pet.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      });
    }),
});
