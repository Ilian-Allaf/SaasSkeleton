import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2023-10-16',
    });

    const price_id = req.body.price_id;
    if (!price_id) {
      return res.status(400).json({ error: 'Wrong price_id parameter.' });
    }
    const appSession = await getServerSession(req, res, authOptions)

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_URL}/api/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_URL}/pricing`,
      customer_email: appSession?.user.email,
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