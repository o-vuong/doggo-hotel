/**
 * Authentication Router
 *
 * This router handles all authentication-related operations including user registration
 * and password management. It uses bcrypt for password hashing and implements
 * proper security measures for user data protection.
 *
 * @module auth
 */

import { z } from "zod";
import { hash as bcryptHash } from "bcrypt";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../db";
import { getSession } from "next-auth/react";

/**
 * Input validation schema for user registration
 */
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default NextAuth({
  providers: [
    Providers.Credentials({
      // Add your custom credential provider logic here
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    },
    async signIn(user, account, profile) {
      return true;
    },
  },
});

// RBAC Middleware
export const rbacMiddleware = async (req, res, next) => {
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const hasPermission = await prisma.permission.findFirst({
    where: {
      role: session.user.role,
      resource: "auth",
      action: req.method.toLowerCase(),
    },
  });
  if (!hasPermission) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

export const authRouter = createTRPCRouter({
  /**
   * Register a new user
   *
   * This mutation handles new user registration. It:
   * 1. Validates the input data
   * 2. Checks for existing users with the same email
   * 3. Hashes the password
   * 4. Creates a new user record
   * 5. Returns necessary data for immediate sign-in
   *
   * @param {Object} input - Registration data
   * @param {string} input.name - User's full name
   * @param {string} input.email - User's email address
   * @param {string} input.password - User's password (plain text)
   * @returns {Promise<Object>} Registration result with user data
   * @throws {TRPCError} If email already exists or registration fails
   */
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ ctx, input }) => {
      const { name, email, password } = input;

      // Check for existing user
      const exists = await ctx.prisma.user.findUnique({
        where: { email },
      });

      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User with this email already exists",
        });
      }

      // Hash the password and create the user
      const hashedPassword = await bcryptHash(password, 10);
      const user = await ctx.prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
        },
      });

      return user;
    }),
});
