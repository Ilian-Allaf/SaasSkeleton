import { NextApiRequest, NextApiResponse } from 'next'
import {sendInvoiceEmail} from '@/utils/sendEmail';
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { Stripe } from 'stripe';
import { setupGraphQLClient } from "@/lib/gqlclient";
import { GetSubscriptionPlanDocument, UpdateUserSubscriptionPlanDocument } from '@/src/gql/graphql';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const gqlClient = await setupGraphQLClient(req, res);

  try {
    const appSession = await getServerSession(req, res, authOptions)
    if(!appSession){
        return {
            error: 'Not Authenticated',
        };
    };
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-10-16',
    });
    const stripeSession = await stripe.checkout.sessions.retrieve(req.query.session_id as string);
    const customer = await stripe.customers.retrieve(stripeSession.customer as string);
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
    });

    const plan_id = subscriptions['data'][0]['items']['data'][0]['plan']['id']
    const subscription_id = subscriptions['data'][0]['items']['data'][0]['subscription']

    const subscriptionPlan = await gqlClient!.request( GetSubscriptionPlanDocument, { id: plan_id} );
    const updatedUser = await gqlClient!.request( UpdateUserSubscriptionPlanDocument, { id: appSession.user.id, stripe_customer_id: customer.id, subscribtion_plan: subscriptionPlan.subscribtion_plan_by_pk?.name!, subscribtion_id: subscription_id } );

    if(!updatedUser.update_auth_user_by_pk?.id){
      return res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
    }
    
    //TODO: send invoice by email

    res.writeHead(302, {
      Location: '/dashboard',
    });
    res.end();
  }catch (err) {
    console.log(err);
    return res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
  }
}