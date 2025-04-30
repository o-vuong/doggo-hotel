import { CronJob } from "cron";
import { PrismaClient } from "@prisma/client";
import { OverstayService } from "../services/overstay";

const prisma = new PrismaClient();
const overstayService = new OverstayService(prisma);

// Run every hour
const job = new CronJob("0 * * * *", async () => {
  try {
    await overstayService.checkOverstays();
  } catch (error) {
    console.error("Error checking overstays:", error);
  }
});

export const startOverstayJob = () => {
  job.start();
  console.log("Overstay monitoring job started");
};

export const stopOverstayJob = () => {
  job.stop();
  console.log("Overstay monitoring job stopped");
}; 