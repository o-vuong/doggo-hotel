import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import appRouter from './server/trpc';
import { createContext } from './server/trpc/context';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get('/', (req, res) => {
  res.send('Doggo Hotel Backend is running');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 