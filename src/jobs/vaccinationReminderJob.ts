import cron from "node-cron";
import { prisma } from "../server/db";
import { sendVaccinationReminder } from "../server/services/notification";

// Schedule job to run everyday at 9 am
cron.schedule("0 9 * * *", async () => {
  try {
    // Find pets with vaccination due within the next 24 hours
    const petsDue = await prisma.pet.findMany({
      where: {
        vaccinationDue: {
          lte: new Date(new Date().setDate(new Date().getDate() + 1)),
        },
      },
      select: { id: true, ownerEmail: true, vaccinationDue: true },
    });

    for (const pet of petsDue) {
      try {
        await sendVaccinationReminder(pet);
        console.log(`Reminder sent for pet ${pet.id}`);
      } catch (error) {
        console.error(`Error sending reminder for pet ${pet.id}:`, error);
      }
    }
  } catch (err) {
    console.error("Error executing vaccination reminder job:", err);
  }
});

console.log("Vaccination reminder job scheduled to run at 9 AM daily.");
