import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpcBase';

/**
 * Payment Router
 *
 * Endpoints for processing payments, retrieving a user's payments, and updating payment statuses.
 */
export const paymentRouter = router({
    createPayment: protectedProcedure.input(
        z.object({
            reservationId: z.number(),
            amount: z.number()
        })
    ).mutation(async ({ ctx, input }) => {
        const payment = await ctx.prisma.payment.create({
            data: {
                // Connect payment to a reservation using its ID.
                reservation: { connect: { id: input.reservationId } },
                amount: input.amount,
                // Associate payment with the current user via nested connect.
                user: { connect: { id: ctx.session.user.id } },
            },
        });
        return payment;
    }),

    getPayments: protectedProcedure.query(async ({ ctx }) => {
        // Retrieve payments for the current user.
        return await ctx.prisma.payment.findMany({
            where: { userId: ctx.session.user.id },
        });
    }),

    updatePaymentStatus: protectedProcedure.input(
        z.object({
            id: z.number(),
            status: z.enum(["PENDING", "PAID", "REFUNDED", "FAILED"]),
        })
    ).mutation(async ({ ctx, input }) => {
        const payment = await ctx.prisma.payment.update({
            where: { id: input.id },
            data: { status: input.status },
        });
        return payment;
    }),
}); 