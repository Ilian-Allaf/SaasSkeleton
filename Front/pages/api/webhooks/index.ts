import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';
import Cors from 'micro-cors';
import { prisma } from '@/lib/prismaclient';
import { text } from 'micro';

const cors = Cors({
  allowMethods: ['POST', 'GET', 'HEAD'],
});

export const config = {
  api: {
    bodyParser: false,
  },
}

const webhookSecret: string = process.env.STRIPE_WEBHOOKS_SECRET!
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16'});

async function webhookHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const buf = await text(req);
    const sig = req.headers['stripe-signature']!;

    let event: Stripe.Event;
    
    try {
      event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
    } catch (err) {
      console.error(err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    if (event.type === 'customer.subscription.updated') {
      const subscription = event.data.object as Stripe.Subscription;
      console.log(subscription)
      if (subscription.status === 'canceled' && subscription.cancel_at_period_end) {

        console.log(`Subscription ${subscription.id} has been canceled.`);

        const removeSubscribtion = await prisma.user.update({
          where: {
            stripeSubscribtionId: subscription.id
          },
          data: {
            stripeCustomerId: null,
            subscribtionPlan: null,
            stripeSubscribtionId: null
          }
        });
        console.log(removeSubscribtion)
        if(!removeSubscribtion){
          return res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
        }

      } else {
        console.log(`Subscription ${subscription.id} has been updated.`);
      }
    }
    else if (event.type === 'subscription_schedule.aborted') {
      // const session = event.data.object as Stripe.Subscription.;
      //https://stripe.com/docs/billing/subscriptions/webhooks#payment-failures
      // console.log(session)
      // console.log(`Session ${session.id} has been completed.`);
    }

    return res.status(200).json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

export default cors(webhookHandler as any);