import { z } from "zod";
import { hash } from "bcrypt";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { name, email, password } = input;

      const exists = await ctx.prisma.user.findUnique({
        where: { email },
      });

      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists",
        });
      }

      const hashedPassword = await hash(password, 10);

      const user = await ctx.prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: "PET_OWNER", // Default role for new registrations
        },
      });

      return {
        status: 201,
        message: "Account created successfully",
        email: user.email,
        password: password, // Return the unhashed password for immediate sign-in
      };
    }),
});
