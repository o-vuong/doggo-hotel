import Bull from "bull";
import { sendVaccinationReminder } from "../server/services/notification";

const taskQueue = new Bull("task-queue", {
  redis: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT) || 6379,
  },
});

// Process job for sending vaccination reminders
taskQueue.process("sendReminder", async (job) => {
  const pet = job.data.pet;
  return await sendVaccinationReminder(pet);
});

export async function addReminderTask(pet: any) {
  return await taskQueue.add("sendReminder", { pet });
}

export default taskQueue;
