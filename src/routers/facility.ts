import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const facilityRouter = router({
  createFacility: protectedProcedure.input(
    z.object({
      name: z.string(),
      address: z.string(),
      phone: z.string().optional(),
      operatingHours: z.string().optional(),
      capacity: z.number().optional(),
    })
  ).mutation(async ({ ctx, input }) => {
    const facility = await ctx.prisma.facility.create({
      data: {
        name: input.name,
        address: input.address,
        phone: input.phone,
        operatingHours: input.operatingHours,
        capacity: input.capacity,
      },
    });
    return facility;
  }),

  getFacilities: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.facility.findMany();
  }),

  updateFacility: protectedProcedure.input(
    z.object({
      id: z.number(),
      name: z.string().optional(),
      address: z.string().optional(),
      phone: z.string().optional(),
      operatingHours: z.string().optional(),
      capacity: z.number().optional(),
    })
  ).mutation(async ({ ctx, input }) => {
    const { id, ...data } = input;
    const facility = await ctx.prisma.facility.update({
      where: { id },
      data,
    });
    return facility;
  }),

  deleteFacility: protectedProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    await ctx.prisma.facility.delete({
      where: { id: input },
    });
    return { message: "Facility deleted successfully" };
  }),
}); 