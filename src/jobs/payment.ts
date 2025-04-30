import { CronJob } from "cron";
import { PrismaClient } from "@prisma/client";
import { NotificationService } from "../services/notification";

const prisma = new PrismaClient();
const notificationService = new NotificationService(prisma);

// Run every day at 9 AM
const job = new CronJob("0 9 * * *", async () => {
  try {
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    // Find reservations with pending payments due tomorrow
    const reservations = await prisma.reservation.findMany({
      where: {
        payment: {
          status: "PENDING",
          dueDate: {
            lte: tomorrow,
            gte: now,
          },
        },
      },
      include: {
        payment: true,
      },
    });

    for (const reservation of reservations) {
      await notificationService.sendPaymentReminder(reservation.id);
    }
  } catch (error) {
    console.error("Error processing payment reminders:", error);
  }
});

export const startPaymentJob = () => {
  job.start();
  console.log("Payment reminder job started");
};

export const stopPaymentJob = () => {
  job.stop();
  console.log("Payment reminder job stopped");
}; 