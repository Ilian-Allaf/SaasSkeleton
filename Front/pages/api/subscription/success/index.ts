import { NextApiRequest, NextApiResponse } from 'next'
import {generateVerificationEmailToken, sendEmail, sendInvoiceEmail} from '@/utils/sendEmail';
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { Stripe } from 'stripe';
import { setupUnauthenticatedGraphQLClient } from "@/lib/unauthenticatedGqlClient";
import { prisma } from '@/lib/prismaClient';
import { GetSubscriptionPlanDocument, UpdateUserSubscriptionPlanDocument } from '@/src/gql/graphql';
import generator from 'generate-password';
import bcrypt from "bcrypt";
import { baseTemplate } from 'emailTemplates';

// A customer can subscribe to a plan even if he is not logged in. In this case, we need to create a new user in the database.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const UnauthenticatedGqlClient = await setupUnauthenticatedGraphQLClient(req, res);
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-10-16',
    });
    const stripeSession = await stripe.checkout.sessions.retrieve(req.query.session_id as string);
    const customerEmail = stripeSession.customer_details?.email as string;
    const customer = await stripe.customers.retrieve(stripeSession.customer as string);
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
    });

    const appSession = await getServerSession(req, res, authOptions)
    const user = await prisma.user.findUnique({
      where: {
        email: customerEmail
      }
    });

    const plan_id = subscriptions['data'][0]['items']['data'][0]['plan']['id']
    const subscription_id = subscriptions['data'][0]['items']['data'][0]['subscription']
    const subscriptionPlan = await UnauthenticatedGqlClient!.request( GetSubscriptionPlanDocument, { id: plan_id} );
    let emailContent: any;

    // If the user is not logged in and the checkout email is not used,  we create a new user in the database
    if(!appSession && !user){
      console.log('Creating new user');
      const generatedPassword = generator.generate({length: 10, numbers: true, uppercase: true, symbols: true, strict: true});
      const user = await prisma.user.create({
        data: {
          email: customerEmail,
          username: '',
          password: await bcrypt.hash(generatedPassword, 10),
          subscribtionPlan: subscriptionPlan.subscribtion_plan_by_pk?.name!,
          stripeCustomerId: customer.id,
          stripeSubscribtionId: subscription_id
        }
      });
      const token = await generateVerificationEmailToken(user.id);

      //Send email with generated password and link to verify email and receipt
      emailContent = baseTemplate({
        title: 'Thank you for your subscription !',
        subtitle: `Thank you for your trust in our service. Here is you generated password: <b>${generatedPassword}</b>.<br>Please click the button below to activate your account.`,
        buttonLink: `${process.env.NEXT_URL}/api/verify-email/${token}`,
        buttonText: 'Activate account',
        additionalText: 'This link will expire in 5 days.'
      });
    } 
    else {
      const userId = appSession ? appSession.user.id : user?.id;
      const gqlClient = await setupUnauthenticatedGraphQLClient(req, res);
      const updatedUser = await gqlClient!.request( UpdateUserSubscriptionPlanDocument, { id: userId, stripe_customer_id: customer.id, subscribtion_plan: subscriptionPlan.subscribtion_plan_by_pk?.name!, subscribtion_id: subscription_id } );
      if(!updatedUser.update_auth_user_by_pk?.id){
        return res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
      }

      //Send email with invoice and link to dashboard and receipt
      emailContent = baseTemplate({
        title: 'Thank you for your subscription !',
        subtitle: 'Thank you for your trust in our service.<br>Click the button below to access your dashboard.',
        buttonLink: `${process.env.NEXT_URL}/dashboard/`,
        buttonText: 'Go to dashboard',
        additionalText: ''
      });
    }
    await sendEmail({
      to: customerEmail,
      subject: "Subscription",
      html: emailContent,
    });
    
    //TODO: Add toasts to the front-end to inform the user about the email sent
    res.writeHead(302, {
      Location: '/dashboard',
    });
    res.end();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
  }
}