import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const petRouter = router({
  createPet: protectedProcedure.input(
    z.object({
      name: z.string(),
      breed: z.string().optional(),
      age: z.number().optional(),
      vaccinated: z.boolean().optional(),
    })
  ).mutation(async ({ ctx, input }) => {
    const pet = await ctx.prisma.pet.create({
      data: {
        name: input.name,
        breed: input.breed,
        age: input.age,
        owner: {
          connect: { id: ctx.session.user.id },
        },
        ...(input.vaccinated !== undefined ? { vaccinated: input.vaccinated } : {}),
      },
    });
    return pet;
  }),
  listPets: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.pet.findMany({
      where: { ownerId: ctx.session.user.id },
    });
  }),
}); 