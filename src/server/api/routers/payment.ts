import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";

const paymentSchema = z.object({
  reservationId: z.string(),
  amount: z.number().positive("Amount must be positive"),
  method: z.enum(["CREDIT_CARD", "DEBIT_CARD", "PAYPAL", "BANK_TRANSFER"]),
  status: z.enum(["PENDING", "COMPLETED", "REFUNDED"]),
});

export const paymentRouter = createTRPCRouter({
  // Create a new payment
  create: protectedProcedure
    .input(paymentSchema)
    .mutation(async ({ ctx, input }) => {
      const payment = await ctx.prisma.payment.create({
        data: input,
      });

      return payment;
    }),

  // Get payment by ID
  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const payment = await ctx.prisma.payment.findUnique({
        where: { id: input },
      });

      if (!payment) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Payment not found",
        });
      }

      return payment;
    }),

  // Update payment
  update: protectedProcedure
    .input(paymentSchema.partial().extend({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      const payment = await ctx.prisma.payment.update({
        where: { id },
        data,
      });

      return payment;
    }),

  // Delete payment (soft delete)
  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const payment = await ctx.prisma.payment.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      });

      return payment;
    }),
});
