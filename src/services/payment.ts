import type { PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export class PaymentService {
  constructor(private prisma: PrismaClient) {}

  async createPayment(
    amount: number,
    reservationId: number,
    userId: string,
    isDeferred = false
  ) {
    const payment = await this.prisma.payment.create({
      data: {
        amount,
        reservationId,
        userId,
        isDeferred,
        dueDate: isDeferred ? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) : null,
      },
    });

    if (!isDeferred) {
      await this.processPayment(payment.id);
    }

    return payment;
  }

  async processPayment(paymentId: number) {
    const payment = await this.prisma.payment.findUnique({
      where: { id: paymentId },
    });

    if (!payment) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Payment not found",
      });
    }

    if (payment.status === "PAID") {
      return payment;
    }

    try {
      const stripePayment = await stripe.paymentIntents.create({
        amount: Math.round(payment.amount * 100),
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      await this.prisma.payment.update({
        where: { id: paymentId },
        data: {
          stripePaymentId: stripePayment.id,
          status: "PAID",
        },
      });

      return payment;
    } catch (error) {
      await this.handlePaymentFailure(paymentId);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Payment processing failed",
        cause: error,
      });
    }
  }

  async handlePaymentFailure(paymentId: number) {
    const payment = await this.prisma.payment.findUnique({
      where: { id: paymentId },
    });

    if (!payment) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Payment not found",
      });
    }

    if (payment.retryCount >= payment.maxRetries) {
      await this.prisma.payment.update({
        where: { id: paymentId },
        data: {
          status: "FAILED",
        },
      });
      return;
    }

    await this.prisma.payment.update({
      where: { id: paymentId },
      data: {
        retryCount: { increment: 1 },
        lastRetryAt: new Date(),
      },
    });

    // Schedule next retry
    setTimeout(() => {
      this.processPayment(paymentId);
    }, 24 * 60 * 60 * 1000); // Retry after 24 hours
  }

  async requestRefund(paymentId: number, reason: string) {
    const payment = await this.prisma.payment.update({
      where: { id: paymentId },
      data: {
        refundRequested: true,
        refundReason: reason,
      },
    });

    return payment;
  }

  async approveRefund(paymentId: number) {
    const payment = await this.prisma.payment.findUnique({
      where: { id: paymentId },
    });

    if (!payment) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Payment not found",
      });
    }

    if (!payment.refundRequested) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Refund not requested",
      });
    }

    try {
      if (payment.stripePaymentId) {
        await stripe.refunds.create({
          payment_intent: payment.stripePaymentId,
        });
      }

      await this.prisma.payment.update({
        where: { id: paymentId },
        data: {
          status: "REFUNDED",
          refundApproved: true,
        },
      });

      return payment;
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Refund processing failed",
        cause: error,
      });
    }
  }
} 