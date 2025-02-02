import { initTRPC, TRPCError } from "@trpc/server";
import { getServerAuthSession } from "./auth";
import { prisma } from "./db";
import { z } from "zod";

const t = initTRPC
  .context<{
    session: ReturnType<typeof getServerAuthSession>;
    prisma: typeof prisma;
  }>()
  .create();

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  const session = await ctx.session;
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

const userRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(6),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.create({
        data: input,
      });
      return user;
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany();
  }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string().email().optional(),
        password: z.string().min(6).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      const user = await ctx.prisma.user.update({
        where: { id },
        data,
      });
      return user;
    }),
  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.user.delete({
        where: { id: input },
      });
      return { message: "User deleted successfully" };
    }),
});

export const appRouter = createTRPCRouter({
  user: userRouter,
});

export default appRouter;
