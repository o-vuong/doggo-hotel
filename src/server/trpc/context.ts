/**
 * This file creates and exports the TRPC context including a dummy session for testing purposes.
 */

import { prisma } from "../db";

export interface Context {
  prisma: typeof prisma;
  session: {
    user: {
      id: string;
      role: string;
    };
  };
}

export const createContext = async ({ req, res }): Promise<Context> => {
  // Assign a dummy session for testing
  const session = { user: { id: "test-user", role: "ADMIN" } };
  return { prisma, session };
}; 