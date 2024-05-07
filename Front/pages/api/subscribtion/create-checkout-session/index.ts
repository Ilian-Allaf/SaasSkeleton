import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2023-10-16',
    });

    const price_id = req.body.price_id;
    if (!price_id) {
      return res.status(400).json({ error: 'Wrong price_id parameter.' });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_URL}/api/subscribtion/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_URL}/dashboard/pricing`,
    });
    if (!session) {
      return res.status(500).json({ message: 'Unable to create checkout session.' });
    }
    return res.status(303).json({ url: session.url! });

  }catch (err) {
    console.log(err);
    return res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
  }
}