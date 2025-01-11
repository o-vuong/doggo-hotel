/**
 * NextAuth Configuration
 *
 * This file configures authentication for the application using NextAuth.js.
 * It sets up:
 * - Credential-based authentication
 * - Session handling with JWT
 * - Role-based access control
 * - Prisma adapter for database integration
 *
 * @module auth
 */

import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { prisma } from "~/server/db";
import { type Role } from "@prisma/client";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: Role;
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
  }
}

/**
 * Authentication options configuration for NextAuth.js
 *
 * @type {NextAuthOptions}
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    /**
     * Callback to add custom fields to the JWT token
     *
     * @param {Object} param0 - Callback parameters
     * @param {any} param0.token - JWT token
     * @param {any} param0.user - User object
     * @returns {Promise<any>} Modified token
     */
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    /**
     * Callback to customize session object
     *
     * @param {Object} param0 - Callback parameters
     * @param {any} param0.session - Session object
     * @param {any} param0.token - JWT token
     * @returns {Promise<any>} Modified session
     */
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.id,
        role: token.role,
      },
    }),
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      /**
       * Authorize user credentials
       *
       * @param {Object} credentials - User credentials
       * @param {string} credentials.email - User email
       * @param {string} credentials.password - User password
       * @returns {Promise<any>} Authorized user object
       * @throws {Error} If credentials are invalid
       */
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

/**
 * Helper function to get server-side session data
 *
 * @param {GetServerSidePropsContext} ctx - Server-side context
 * @returns {Promise<Session|null>} Session data or null
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
