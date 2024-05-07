import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16'});

const createStripeWebhook = async () => {
    const endpoint = await stripe.webhookEndpoints.create({
        url: `${process.env.NEXT_URL}/api/webhook/endpoint`,
        enabled_events: [
          'payment_intent.payment_failed',
          'payment_intent.succeeded',
        ],
      });
}
