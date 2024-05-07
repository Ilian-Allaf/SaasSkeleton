import Stripe from 'stripe';
import { NextApiRequest, NextApiResponse } from 'next'



export default async (req: NextApiRequest, res: NextApiResponse) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2023-10-16',
    });
    
    const { subscriptionId } = req.body;
    const deleted = await stripe.subscriptions.cancel(subscriptionId);
    res.json({ confirmed: deleted });
};