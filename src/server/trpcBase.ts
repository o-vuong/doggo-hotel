import { initTRPC, TRPCError } from '@trpc/server';
import { PrismaClient } from '@prisma/client';

// Define the application context with session and prisma
export type Context = {
  session: { user: { id: string; role: string } } | null;
  prisma: PrismaClient;
};

const prisma = new PrismaClient();

// Create context function. In production, derive session from the request
export const createContext = (): Context => ({
  session: null,
  prisma,
});

// Initialize tRPC with the typed context
const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;
export { TRPCError };

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({ ctx });
});

export const adminProcedure = protectedProcedure;

export const staffProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  if (!ctx.session || !["ADMIN", "STAFF"].includes(ctx.session.user.role)) {
    throw new TRPCError({ code: 'FORBIDDEN' });
  }
  return next();
}); 