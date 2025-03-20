import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpcBase';

/**
 * User Router (stub)
 *
 * Provides minimal endpoint to retrieve current user data.
 */
export const userRouter = router({
    getUser: protectedProcedure.query(async ({ ctx }) => {
        // Return the current session user
        return ctx.session.user;
    }),
}); 