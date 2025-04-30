import type { PrismaClient, Reservation, Pet, User } from "@prisma/client";
import { TRPCError } from "@trpc/server";

type ReservationWithRelations = Reservation & {
  pet: Pet;
  user: User;
};

export class OverstayService {
  private readonly GRACE_PERIOD_HOURS = 24;
  private readonly DAILY_OVERSTAY_FEE = 50;

  constructor(private prisma: PrismaClient) {}

  async checkOverstays() {
    const now = new Date();
    const gracePeriodEnd = new Date(now.getTime() - this.GRACE_PERIOD_HOURS * 60 * 60 * 1000);

    const overdueReservations = await this.prisma.reservation.findMany({
      where: {
        status: "CHECKED_IN",
        endDate: { lt: gracePeriodEnd },
        actualCheckOut: null,
      },
      include: {
        pet: true,
        user: true,
      },
    });

    for (const reservation of overdueReservations) {
      await this.handleOverstay(reservation);
    }
  }

  private async handleOverstay(reservation: ReservationWithRelations) {
    const now = new Date();
    const overstayDays = Math.ceil(
      (now.getTime() - reservation.endDate.getTime()) / (24 * 60 * 60 * 1000)
    );

    // Update reservation with overstay information
    await this.prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        isOverstay: true,
        overstayDays,
        overstayFee: overstayDays * this.DAILY_OVERSTAY_FEE,
      },
    });

    // Attempt to contact owner if not done recently
    if (
      !reservation.lastContactAttempt ||
      now.getTime() - reservation.lastContactAttempt.getTime() > 12 * 60 * 60 * 1000
    ) {
      await this.attemptContact(reservation);
    }

    // Notify emergency contact if owner unresponsive
    if (
      reservation.contactAttempts >= 3 &&
      !reservation.emergencyContactNotified &&
      reservation.pet.emergencyContact
    ) {
      await this.notifyEmergencyContact(reservation);
    }

    // Start legal escalation if necessary
    if (
      reservation.contactAttempts >= 5 &&
      !reservation.legalEscalationStarted
    ) {
      await this.startLegalEscalation(reservation);
    }
  }

  private async attemptContact(reservation: ReservationWithRelations) {
    // Implement actual contact logic (email, SMS, etc.)
    await this.prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        contactAttempts: { increment: 1 },
        lastContactAttempt: new Date(),
      },
    });
  }

  private async notifyEmergencyContact(reservation: ReservationWithRelations) {
    // Implement emergency contact notification
    await this.prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        emergencyContactNotified: true,
      },
    });
  }

  private async startLegalEscalation(reservation: ReservationWithRelations) {
    // Implement legal escalation process
    await this.prisma.reservation.update({
      where: { id: reservation.id },
      data: {
        legalEscalationStarted: true,
      },
    });
  }

  async processOverstayPayment(reservationId: number) {
    const reservation = await this.prisma.reservation.findUnique({
      where: { id: reservationId },
      include: { payment: true },
    });

    if (!reservation) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Reservation not found",
      });
    }

    if (!reservation.isOverstay || !reservation.overstayFee) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "No overstay fee to process",
      });
    }

    // Create and process overstay payment
    const payment = await this.prisma.payment.create({
      data: {
        amount: reservation.overstayFee,
        reservationId: reservation.id,
        userId: reservation.userId,
        status: "PENDING",
      },
    });

    return payment;
  }
} 