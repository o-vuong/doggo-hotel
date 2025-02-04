import { buffer } from 'micro';
import Stripe from 'stripe';
import { prisma } from '../../../server/db';
import { env } from '../../../env.mjs';

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

const webhookSecret = env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        await prisma.payment.update({
          where: { stripePaymentId: paymentIntent.id },
          data: {
            status: 'PAID',
            updatedAt: new Date(),
          },
        });
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        await prisma.payment.update({
          where: { stripePaymentId: failedPayment.id },
          data: {
            status: 'FAILED',
            updatedAt: new Date(),
          },
        });
        break;

      case 'charge.refunded':
        const refund = event.data.object;
        await prisma.payment.update({
          where: { stripePaymentId: refund.payment_intent },
          data: {
            status: 'REFUNDED',
            updatedAt: new Date(),
          },
        });
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error(`Error processing webhook: ${err.message}`);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
}
