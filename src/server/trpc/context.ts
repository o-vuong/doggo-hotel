import { PrismaClient } from '@prisma/client';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';

const prisma = new PrismaClient();

export const createContext = async (opts?: CreateNextContextOptions) => {
  return { prisma };
};

export type Context = Awaited<ReturnType<typeof createContext>>; 