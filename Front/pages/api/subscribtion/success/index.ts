import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';
import {sendInvoiceEmail} from '@/utils/sendEmail';
import { Stripe } from 'stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-10-16',
  });
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id as string);
    const customer = await stripe.customers.retrieve(session.customer as string);
    console.log(customer);
    // const prisma = new PrismaClient();
    // const { userId, subscriptionPlanId } = req.body; 

    // const updatedUser = await prisma.user.update({
    //   where: { id: userId },
    //   data: { subscibtionPlanId: subscriptionPlanId },
    // });
    // //send invoice by email

    // res.writeHead(302, {
    //   Location: '/dashboard/success',
    // });
    // res.end();
  }catch (err) {
    console.log(err);
    return res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
  }
}