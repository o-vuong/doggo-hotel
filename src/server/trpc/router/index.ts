import { router } from '../../trpc';
import { userRouter } from '../../routers/user';
import { petRouter } from '../../routers/pet';
import { reservationRouter } from '../../routers/reservation';

export const appRouter = router({
  user: userRouter,
  pet: petRouter,
  reservation: reservationRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter; 