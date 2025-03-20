import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const facilityRouter = router({
    createFacility: protectedProcedure.input(
        z.object({
            name: z.string(),
            location: z.string().optional(),
            address: z.string().optional(),
            phone: z.string().optional(),
            email: z.string().optional(),
            operatingHours: z.string().optional(),
            capacity: z.number().optional(),
        })
    ).mutation(async ({ ctx, input }) => {
        const facility = await ctx.prisma.facility.create({
            data: input,
        });
        return facility;
    }),

    getFacilities: protectedProcedure.query(async ({ ctx }) => {
        return await ctx.prisma.facility.findMany({
            include: { kennels: true, reservations: true },
        });
    }),

    updateFacility: protectedProcedure.input(
        z.object({
            id: z.number(),
            data: z.object({
                name: z.string().optional(),
                location: z.string().optional(),
                address: z.string().optional(),
                phone: z.string().optional(),
                email: z.string().optional(),
                operatingHours: z.string().optional(),
                capacity: z.number().optional(),
            }),
        })
    ).mutation(async ({ ctx, input }) => {
        const facility = await ctx.prisma.facility.update({
            where: { id: input.id },
            data: input.data,
        });
        return facility;
    }),

    deleteFacility: protectedProcedure.input(
        z.object({
            id: z.number(),
        })
    ).mutation(async ({ ctx, input }) => {
        const facility = await ctx.prisma.facility.delete({
            where: { id: input.id },
        });
        return facility;
    }),
}); 