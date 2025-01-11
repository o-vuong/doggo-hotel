/**
 * Kennel Management Router
 * 
 * Handles all kennel-related operations including creating, reading, updating, and deleting kennels.
 * Implements role-based access control to ensure only authorized users can perform actions.
 * 
 * @module kennel
 */

import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  protectedProcedure,
  adminProcedure,
  staffProcedure,
} from "../trpc";

/**
 * Input validation schema for creating/updating a kennel
 */
const kennelSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  size: z.enum(["SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]),
  dailyRate: z.number().positive("Daily rate must be positive"),
  description: z.string().optional(),
  features: z.array(z.string()).optional(),
  status: z.enum(["AVAILABLE", "OCCUPIED", "MAINTENANCE", "RESERVED"]),
  location: z.string().optional(),
  notes: z.string().optional(),
  maxWeight: z.number().positive("Maximum weight must be positive"),
});

export const kennelRouter = createTRPCRouter({
  /**
   * Create a new kennel
   * 
   * @param {Object} input - Kennel data matching kennelSchema
   * @returns {Promise<Kennel>} Created kennel object
   * @throws {TRPCError} If validation fails or user is unauthorized
   */
  create: adminProcedure
    .input(kennelSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.kennel.create({
        data: input,
      });
    }),

  /**
   * Get all kennels with optional filters
   * 
   * @param {Object} input - Filter parameters
   * @returns {Promise<Kennel[]>} Array of kennel objects
   */
  getAll: protectedProcedure
    .input(
      z.object({
        status: z.enum(["AVAILABLE", "OCCUPIED", "MAINTENANCE", "RESERVED"]).optional(),
        size: z.enum(["SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]).optional(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
      }).optional()
    )
    .query(async ({ ctx, input }) => {
      const where: any = {};

      if (input?.status) {
        where.status = input.status;
      }

      if (input?.size) {
        where.size = input.size;
      }

      // If dates are provided, check availability
      if (input?.startDate && input?.endDate) {
        where.OR = [
          {
            status: "AVAILABLE",
          },
          {
            reservations: {
              none: {
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
              },
            },
          },
        ];
      }

      return ctx.prisma.kennel.findMany({
        where,
        include: {
          reservations: {
            where: {
              endDate: {
                gte: new Date(),
              },
            },
            orderBy: {
              startDate: "asc",
            },
            include: {
              pet: true,
            },
          },
        },
        orderBy: {
          name: "asc",
        },
      });
    }),

  /**
   * Get a single kennel by ID
   * 
   * @param {string} input - Kennel ID
   * @returns {Promise<Kennel>} Kennel object
   * @throws {TRPCError} If kennel not found
   */
  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const kennel = await ctx.prisma.kennel.findUnique({
        where: { id: input },
        include: {
          reservations: {
            where: {
              endDate: {
                gte: new Date(),
              },
            },
            orderBy: {
              startDate: "asc",
            },
            include: {
              pet: true,
            },
          },
        },
      });

      if (!kennel) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Kennel not found",
        });
      }

      return kennel;
    }),

  /**
   * Update a kennel's information
   * 
   * @param {Object} input - Updated kennel data and kennel ID
   * @returns {Promise<Kennel>} Updated kennel object
   * @throws {TRPCError} If kennel not found or user unauthorized
   */
  update: staffProcedure
    .input(
      z.object({
        id: z.string(),
        data: kennelSchema.partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const kennel = await ctx.prisma.kennel.findUnique({
        where: { id: input.id },
      });

      if (!kennel) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Kennel not found",
        });
      }

      return ctx.prisma.kennel.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  /**
   * Delete a kennel
   * 
   * @param {string} input - Kennel ID to delete
   * @returns {Promise<Kennel>} Deleted kennel object
   * @throws {TRPCError} If kennel not found or user unauthorized
   */
  delete: adminProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const kennel = await ctx.prisma.kennel.findUnique({
        where: { id: input },
        include: {
          reservations: {
            where: {
              endDate: {
                gte: new Date(),
              },
            },
          },
        },
      });

      if (!kennel) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Kennel not found",
        });
      }

      if (kennel.reservations.length > 0) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Cannot delete kennel with active reservations",
        });
      }

      return ctx.prisma.kennel.delete({
        where: { id: input },
      });
    }),

  /**
   * Check kennel availability for a given date range
   * 
   * @param {Object} input - Date range and kennel ID
   * @returns {Promise<boolean>} Whether the kennel is available
   */
  checkAvailability: protectedProcedure
    .input(
      z.object({
        kennelId: z.string(),
        startDate: z.date(),
        endDate: z.date(),
      })
    )
    .query(async ({ ctx, input }) => {
      const kennel = await ctx.prisma.kennel.findUnique({
        where: { id: input.kennelId },
        include: {
          reservations: {
            where: {
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
            },
          },
        },
      });

      if (!kennel) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Kennel not found",
        });
      }

      return {
        isAvailable: kennel.status === "AVAILABLE" && kennel.reservations.length === 0,
        currentReservations: kennel.reservations,
      };
    }),
});
