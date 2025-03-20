import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpcBase';

/**
 * Kennel Router (stub)
 *
 * Provides a minimal endpoint to retrieve all kennels.
 */
export const kennelRouter = router({
    getAll: protectedProcedure.query(async ({ ctx }) => {
        // Return all kennels using the Prisma client
        return ctx.prisma.kennel.findMany();
    }),
}); 