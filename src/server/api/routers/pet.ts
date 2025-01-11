/**
 * Pet Management Router
 * 
 * Handles all pet-related operations including creating, reading, updating, and deleting pets.
 * Implements role-based access control to ensure only authorized users can perform actions.
 * 
 * @module pet
 */

import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  protectedProcedure,
  adminProcedure,
} from "../trpc";

/**
 * Input validation schema for creating/updating a pet
 */
const petSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  breed: z.string().min(2, "Breed must be at least 2 characters"),
  dateOfBirth: z.date(),
  weight: z.number().positive("Weight must be positive"),
  medicalConditions: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  medications: z.string().optional(),
  behavioralNotes: z.string().optional(),
  emergencyContactName: z.string().min(2, "Emergency contact name required"),
  emergencyContactPhone: z.string().min(10, "Valid phone number required"),
  vetName: z.string().optional(),
  vetPhone: z.string().optional(),
});

export const petRouter = createTRPCRouter({
  /**
   * Create a new pet
   * 
   * @param {Object} input - Pet data matching petSchema
   * @returns {Promise<Pet>} Created pet object
   * @throws {TRPCError} If validation fails or user is unauthorized
   */
  create: protectedProcedure
    .input(petSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.pet.create({
        data: {
          ...input,
          ownerId: ctx.session.user.id,
        },
      });
    }),

  /**
   * Get all pets owned by the current user
   * 
   * @returns {Promise<Pet[]>} Array of pet objects
   */
  getByOwnerId: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.pet.findMany({
      where: {
        ownerId: ctx.session.user.id,
      },
      orderBy: {
        name: "asc",
      },
    });
  }),

  /**
   * Get a single pet by ID
   * 
   * @param {Object} input - Pet ID
   * @returns {Promise<Pet|null>} Pet object or null if not found
   * @throws {TRPCError} If pet not found or user unauthorized
   */
  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const pet = await ctx.prisma.pet.findUnique({
        where: { id: input },
        include: {
          owner: true,
          reservations: {
            orderBy: { startDate: "desc" },
            take: 5,
          },
        },
      });

      if (!pet) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Pet not found",
        });
      }

      // Only allow owner or admin to view pet details
      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role !== "ADMIN"
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to view this pet",
        });
      }

      return pet;
    }),

  /**
   * Update a pet's information
   * 
   * @param {Object} input - Updated pet data and pet ID
   * @returns {Promise<Pet>} Updated pet object
   * @throws {TRPCError} If pet not found or user unauthorized
   */
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

      // Only allow owner or admin to update pet
      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role !== "ADMIN"
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

  /**
   * Delete a pet
   * 
   * @param {string} input - Pet ID to delete
   * @returns {Promise<Pet>} Deleted pet object
   * @throws {TRPCError} If pet not found or user unauthorized
   */
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

      // Only allow owner or admin to delete pet
      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role !== "ADMIN"
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to delete this pet",
        });
      }

      return ctx.prisma.pet.delete({
        where: { id: input },
      });
    }),

  /**
   * Admin only: Get all pets in the system
   * 
   * @returns {Promise<Pet[]>} Array of all pet objects
   */
  getAll: adminProcedure.query(async ({ ctx }) => {
    return ctx.prisma.pet.findMany({
      include: {
        owner: true,
        reservations: {
          orderBy: { startDate: "desc" },
          take: 1,
        },
      },
      orderBy: {
        name: "asc",
      },
    });
  }),
});
