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
import { hash } from "bcrypt";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

/**
 * Input validation schema for user registration
 */
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

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
          message: "User already exists",
        });
      }

      // Hash password with bcrypt
      const hashedPassword = await hash(password, 10);

      // Create new user
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
        password: password, // Return unhashed password for immediate sign-in
      };
    }),
});
