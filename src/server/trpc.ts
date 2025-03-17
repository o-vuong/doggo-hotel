import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from './trpc/context';
import { getServerAuthSession } from "./auth";
import { prisma } from "./db";
import { z } from "zod";
import { userRouter } from '../routers/user';
import { petRouter } from '../routers/pet';
import { paymentRouter } from '../routers/payment';
import { reservationRouter } from '../routers/reservation';
import { facilityRouter } from '../routers/facility';
import { kennelRouter } from '../routers/kennel';
import { dashboardRouter } from '../routers/dashboard';

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;

export { TRPCError };

export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  const session = ctx.session;
  if (!session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({ ctx: { ...ctx, session } });
});

export const adminProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  if (ctx.session.user.role !== "ADMIN") {
    throw new TRPCError({ code: "FORBIDDEN" });
  }
  return next();
});

export const staffProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  if (!["ADMIN", "STAFF"].includes(ctx.session.user.role)) {
    throw new TRPCError({ code: "FORBIDDEN" });
  }
  return next();
});

export const appRouter = router({
  user: userRouter,
  pet: petRouter,
  payment: paymentRouter,
  reservation: reservationRouter,
  facility: facilityRouter,
  kennel: kennelRouter,
  dashboard: dashboardRouter,
});
export type AppRouter = typeof appRouter;
export default appRouter;
