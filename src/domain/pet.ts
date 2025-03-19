import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

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
      emergencyContact: z.string().optional()
    })
  ).mutation(async ({ ctx, input }) => {
    const pet = await ctx.prisma.pet.create({
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
      } as any,
    });
    return pet;
  }),

  getAllPets: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.pet.findMany({
      where: { ownerId: ctx.session.user.id },
    });
  }),

  updatePet: protectedProcedure.input(
    z.object({
      id: z.number(),
      name: z.string().optional(),
      species: z.string().optional(),
      breed: z.string().optional(),
      age: z.number().optional(),
      vaccinationStatus: z.array(z.string()).optional(),
      medicalHistory: z.string().optional(),
      dietaryPreferences: z.string().optional(),
      behavioralNotes: z.string().optional(),
      emergencyContact: z.string().optional(),
    })
  ).mutation(async ({ ctx, input }) => {
    const { id, ...data } = input;
    const pet = await ctx.prisma.pet.update({
      where: { id },
      data,
    });
    return pet;
  }),

  deletePet: protectedProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    await ctx.prisma.pet.delete({
      where: { id: input },
    });
    return { message: "Pet deleted successfully" };
  }),
}); 