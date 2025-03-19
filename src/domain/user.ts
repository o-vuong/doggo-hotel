import { router, publicProcedure } from '../server/trpc';

export const userRouter = router({
  hello: publicProcedure.query(() => {
    return { greeting: 'Hello from userRouter' };
  }),
}); 