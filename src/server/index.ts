import { appRouter } from "./trpc";
import { createContext } from "./trpcBase";
import { startAllJobs } from "../jobs/scheduler";

// Start scheduled jobs
startAllJobs(); 