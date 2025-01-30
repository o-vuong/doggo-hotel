import { initTRPC, TRPCError } from '@trpc/server';
import { getServerAuthSession } from './auth';
import { prisma } from './db';

const t = initTRPC.context<{
  session: ReturnType<typeof getServerAuthSession>;
  prisma: typeof prisma;
}>().create();

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  const session = await ctx.session;
  if (!session) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({ ctx: { ...ctx, session } });
});

export const adminProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  if (ctx.session.user.role !== 'ADMIN') {
    throw new TRPCError({ code: 'FORBIDDEN' });
  }
  return next();
});

export const staffProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  if (!['ADMIN', 'STAFF'].includes(ctx.session.user.role)) {
    throw new TRPCError({ code: 'FORBIDDEN' });
  }
  return next();
});
