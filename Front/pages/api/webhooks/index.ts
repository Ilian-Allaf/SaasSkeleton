import { prisma } from '@/lib/prismaClient';
import { text } from 'micro';
import Cors from 'micro-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';
import Stripe from 'stripe';

const cors = Cors({
  allowMethods: ['POST', 'GET', 'HEAD'],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookSecret: string = process.env.STRIPE_WEBHOOKS_SECRET!;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

async function webhookHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }

  const buf = await text(req);
  const sig = req.headers['stripe-signature']!;
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
  } catch (err) {
    console.error(err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'customer.subscription.updated': {
        // cancel_at_period_end and remove cancel_at_period_end
        const subscription = event.data.object as Stripe.Subscription;
        console.log(subscription);
        if (
          subscription.status === 'canceled' &&
          subscription.cancel_at_period_end
        ) {
          console.log(`Subscription ${subscription.id} has been canceled.`);

          const removeSubscribtion = await prisma.user.update({
            where: {
              stripeSubscribtionId: subscription.id,
            },
            data: {
              stripeCustomerId: null,
              subscribtionPlan: null,
              stripeSubscribtionId: null,
            },
          });
        }
        break;
      }
      case 'customer.subscription.deleted': {
        // ❌ Revoke access to the product
        // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        await prisma.user.update({
          where: { stripeCustomerId: customerId },
          data: {
            subscribtionPlan: null,
            stripeSubscribtionId: null,
          },
        });

        cookies().delete(process.env.NEXTAUTH_SESSION_COOKIE_NAME as string);

        break;
      }
      case 'invoice.payment_failed': {
        // https://docs.stripe.com/billing/subscriptions/cancel
        // Revoke access
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;

        await prisma.user.update({
          where: { stripeCustomerId: customerId },
          data: { subscribtionPlan: null },
        });
        break;
      }
      case 'invoice.payment_succeeded': {
        // Grant access
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;
        // const subscriptionPlanId = invoice.lines.data[0].plan.id;

        await prisma.user.update({
          where: { stripeCustomerId: customerId },
          data: { subscribtionPlan: null },
        });
        break;
      }
      case 'checkout.session.expired': {
        // TODO: Send abandoned cart email
      }
      default:
      // Unhandled event type
    }
  } catch (e) {
    console.error(
      'stripe error: ' + e.message + ' | EVENT TYPE: ' + event.type
    );
  }
  return res.status(200).json({ received: true });
}

export default cors(webhookHandler as any);
