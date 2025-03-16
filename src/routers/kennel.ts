import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const kennelRouter = router({
  createKennel: protectedProcedure.input(
    z.object({
      facilityId: z.number(),
      name: z.string(),
      capacity: z.number().optional(),
      category: z.enum(["SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"])
    })
  ).mutation(async ({ ctx, input }) => {
    const kennel = await ctx.prisma.kennel.create({
      data: {
        facilityId: input.facilityId,
        name: input.name,
        capacity: input.capacity,
        category: input.category
      },
    });
    return kennel;
  }),

  getKennels: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.kennel.findMany();
  }),

  updateKennel: protectedProcedure.input(
    z.object({
      id: z.number(),
      name: z.string().optional(),
      capacity: z.number().optional(),
      category: z.enum(["SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]).optional()
    })
  ).mutation(async ({ ctx, input }) => {
    const { id, ...data } = input;
    const kennel = await ctx.prisma.kennel.update({
      where: { id },
      data: data,
    });
    return kennel;
  }),

  deleteKennel: protectedProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    await ctx.prisma.kennel.delete({
      where: { id: input },
    });
    return { message: "Kennel deleted successfully" };
  }),
}); 