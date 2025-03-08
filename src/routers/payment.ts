import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const paymentRouter = router({
  createPayment: protectedProcedure.input(
    z.object({
      amount: z.number(),
      stripePaymentId: z.string().optional(),
      reservationId: z.number(),
    })
  ).mutation(async ({ ctx, input }) => {
    const payment = await ctx.prisma.payment.create({
      data: {
        amount: input.amount,
        status: 'PENDING',
        stripePaymentId: input.stripePaymentId,
        reservation: {
          connect: { id: input.reservationId.toString() },
        },
        user: {
          connect: { id: ctx.session.user.id },
        },
      },
    });
    return payment;
  }),
  listPayments: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.payment.findMany({
      where: { userId: ctx.session.user.id },
      include: { reservation: true },
    });
  }),
}); 