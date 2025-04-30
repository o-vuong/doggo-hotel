import type { PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import nodemailer from "nodemailer";
import twilio from "twilio";

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error("Email credentials not set");
}

if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
  throw new Error("Twilio credentials not set");
}

const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export class NotificationService {
  constructor(private prisma: PrismaClient) {}

  async sendEmail(to: string, subject: string, html: string) {
    try {
      await emailTransporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to send email",
        cause: error,
      });
    }
  }

  async sendSMS(to: string, message: string) {
    try {
      await twilioClient.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to,
      });
    } catch (error) {
      console.error("Error sending SMS:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to send SMS",
        cause: error,
      });
    }
  }

  async sendBookingConfirmation(reservationId: number) {
    const reservation = await this.prisma.reservation.findUnique({
      where: { id: reservationId },
      include: {
        pet: true,
        user: true,
        kennel: true,
        facility: true,
      },
    });

    if (!reservation) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Reservation not found",
      });
    }

    const emailHtml = `
      <h1>Booking Confirmation</h1>
      <p>Dear ${reservation.user.email},</p>
      <p>Your booking for ${reservation.pet.name} has been confirmed.</p>
      <p>Details:</p>
      <ul>
        <li>Facility: ${reservation.facility.name}</li>
        <li>Kennel: ${reservation.kennel.name}</li>
        <li>Check-in: ${reservation.startDate.toLocaleDateString()}</li>
        <li>Check-out: ${reservation.endDate.toLocaleDateString()}</li>
      </ul>
    `;

    await this.sendEmail(reservation.user.email, "Booking Confirmation", emailHtml);
  }

  async sendPaymentReminder(reservationId: number) {
    const reservation = await this.prisma.reservation.findUnique({
      where: { id: reservationId },
      include: {
        pet: true,
        user: true,
        payment: true,
      },
    });

    if (!reservation) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Reservation not found",
      });
    }

    const emailHtml = `
      <h1>Payment Reminder</h1>
      <p>Dear ${reservation.user.email},</p>
      <p>This is a reminder that payment for ${reservation.pet.name}'s stay is due.</p>
      <p>Amount: $${reservation.payment?.amount}</p>
      <p>Please make the payment at your earliest convenience.</p>
    `;

    await this.sendEmail(reservation.user.email, "Payment Reminder", emailHtml);
  }

  async sendOverstayAlert(reservationId: number) {
    const reservation = await this.prisma.reservation.findUnique({
      where: { id: reservationId },
      include: {
        pet: true,
        user: true,
      },
    });

    if (!reservation) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Reservation not found",
      });
    }

    const emailHtml = `
      <h1>Overstay Alert</h1>
      <p>Dear ${reservation.user.email},</p>
      <p>This is to inform you that ${reservation.pet.name}'s stay has exceeded the scheduled check-out date.</p>
      <p>Please contact us immediately to arrange for pick-up.</p>
    `;

    await this.sendEmail(reservation.user.email, "Overstay Alert", emailHtml);

    if (reservation.pet.emergencyContact) {
      await this.sendSMS(
        reservation.pet.emergencyContact,
        `URGENT: ${reservation.pet.name} has overstayed at the facility. Please contact the owner.`
      );
    }
  }
} 