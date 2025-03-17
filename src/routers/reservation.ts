import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const reservationRouter = router({
  createReservation: protectedProcedure.input(
    z.object({
      petId: z.number(),
    })
  ).mutation(async ({ ctx, input }) => {
    const reservation = await ctx.prisma.reservation.create({
      data: {
        pet: { connect: { id: input.petId } },
        user: { connect: { id: ctx.session.user.id } },
      },
    });
    return reservation;
  }),

  getReservations: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.reservation.findMany({
      where: { userId: ctx.session.user.id },
      include: { pet: true, payment: true },
    });
  }),

  updateReservationStatus: protectedProcedure.input(
    z.object({
      id: z.number(),
      status: z.enum(["PENDING", "CONFIRMED", "CHECKED_IN", "CHECKED_OUT", "CANCELLED"]),
    })
  ).mutation(async ({ ctx, input }) => {
    const reservation = await ctx.prisma.reservation.update({
      where: { id: input.id },
      data: { status: input.status },
    });
    return reservation;
  }),
}); 