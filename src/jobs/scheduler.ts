import { startOverstayJob, stopOverstayJob } from "./overstay";
import { startPaymentJob, stopPaymentJob } from "./payment";

export const startAllJobs = () => {
  startOverstayJob();
  startPaymentJob();
  console.log("All scheduled jobs started");
};

export const stopAllJobs = () => {
  stopOverstayJob();
  stopPaymentJob();
  console.log("All scheduled jobs stopped");
};