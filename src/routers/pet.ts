import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpcBase';

/**
 * Pet Router
 *
 * Endpoints for managing pet profiles, including creation, retrieval, update, and deletion.
 */
export const petRouter = router({
    createPet: protectedProcedure.input(
        z.object({
            name: z.string(),
            species: z.string(),
            breed: z.string().optional(),
            age: z.number().optional(),
            vaccinationStatus: z.array(z.string()).optional(),
            medicalHistory: z.string().optional(),
            dietaryPreferences: z.string().optional(),
            behavioralNotes: z.string().optional(),
            emergencyContact: z.string().optional(),
        })
    ).mutation(async ({ ctx, input }) => {
        return await ctx.prisma.pet.create({
            data: {
                name: input.name,
                species: input.species,
                breed: input.breed,
                age: input.age,
                vaccinationStatus: input.vaccinationStatus,
                medicalHistory: input.medicalHistory,
                dietaryPreferences: input.dietaryPreferences,
                behavioralNotes: input.behavioralNotes,
                emergencyContact: input.emergencyContact,
                owner: { connect: { id: ctx.session.user.id } },
            },
        });
    }),

    getPets: protectedProcedure.query(async ({ ctx }) => {
        // Retrieve pets where the current user is the owner
        const pets = await ctx.prisma.pet.findMany({
            where: { ownerId: ctx.session.user.id },
        });
        return pets;
    }),

    updatePet: protectedProcedure.input(
        z.object({
            id: z.number(),
            data: z.object({
                name: z.string().optional(),
                species: z.string().optional(),
                breed: z.string().optional(),
                age: z.number().optional(),
                vaccinationStatus: z.array(z.string()).optional(),
                medicalHistory: z.string().optional(),
                dietaryPreferences: z.string().optional(),
                behavioralNotes: z.string().optional(),
                emergencyContact: z.string().optional(),
            }),
        })
    ).mutation(async ({ ctx, input }) => {
        const pet = await ctx.prisma.pet.update({
            where: { id: input.id },
            data: input.data,
        });
        return pet;
    }),

    deletePet: protectedProcedure.input(
        z.object({
            id: z.number(),
        })
    ).mutation(async ({ ctx, input }) => {
        const pet = await ctx.prisma.pet.delete({
            where: { id: input.id },
        });
        return pet;
    }),
}); 