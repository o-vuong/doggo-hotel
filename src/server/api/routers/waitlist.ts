import { z } from "zod";
import { createRouter } from "../context";
import { prisma } from "../../db";
import { logAdminAction } from "../../services/audit";

export const waitlistRouter = createRouter()
  .mutation("joinWaitlist", {
    input: z.object({
      reservationId: z.string(),
      userId: z.string(),
    }),
    async resolve({ input, ctx }) {
      const exists = await prisma.waitlist.findFirst({
        where: { reservationId: input.reservationId, userId: input.userId },
      });
      if (exists) {
        throw new Error("Already in waitlist");
      }
      const entry = await prisma.waitlist.create({
        data: { reservationId: input.reservationId, userId: input.userId },
      });
      await logAdminAction({
        userId: ctx.session.user.id,
        action: "JOIN_WAITLIST",
        details: JSON.stringify(entry),
      });
      return entry;
    },
  })
  .mutation("leaveWaitlist", {
    input: z.object({ waitlistId: z.string() }),
    async resolve({ input, ctx }) {
      const entry = await prisma.waitlist.delete({
        where: { id: input.waitlistId },
      });
      await logAdminAction({
        userId: ctx.session.user.id,
        action: "LEAVE_WAITLIST",
        details: JSON.stringify(entry),
      });
      return entry;
    },
  });
