import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { petRouter } from "./routers/pet";
import { kennelRouter } from "./routers/kennel";
import { reservationRouter } from "./routers/reservation";
import { paymentRouter } from "./routers/payment";
import { facilityRouter } from "./routers/facility";
import { authRouter } from "./routers/auth";
import { dashboardRouter } from "./routers/dashboard";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  pet: petRouter,
  kennel: kennelRouter,
  reservation: reservationRouter,
  payment: paymentRouter,
  facility: facilityRouter,
  dashboard: dashboardRouter,
});

export type AppRouter = typeof appRouter;
