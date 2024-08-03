import { prisma } from '@/lib/prismaClient';
import { setupUnauthenticatedGraphQLClient } from '@/lib/unauthenticatedGqlClient';
import {
  GetSubscriptionPlanNameByPriceIdDocument,
  UpdateUserSubscriptionPlanDocument,
} from '@/src/gql/graphql';
import { generateVerificationEmailToken, sendEmail } from '@/utils/sendEmail';
import bcrypt from 'bcrypt';
import { baseTemplate } from 'emailTemplates';
import generator from 'generate-password';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { Stripe } from 'stripe';

// A customer can subscribe to a plan even if he is not logged in. In this case, we need to create a new user in the database.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const UnauthenticatedGqlClient = await setupUnauthenticatedGraphQLClient(
    req,
    res
  );
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-10-16',
    });
    const stripeSession = await stripe.checkout.sessions.retrieve(
      req.query.session_id as string
    );
    const customerEmail = stripeSession.customer_details?.email as string;
    const customer = await stripe.customers.retrieve(
      stripeSession.customer as string
    );
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
    });

    const appSession = await getServerSession(req, res, authOptions);
    const existingUser = await prisma.user.findUnique({
      where: {
        email: customerEmail,
      },
    });

    const price_id =
      subscriptions['data'][0]['items']['data'][0]['price']['id'];

    const subscription_id =
      subscriptions['data'][0]['items']['data'][0]['subscription'];

    const subscriptionPlan = await UnauthenticatedGqlClient!.request(
      GetSubscriptionPlanNameByPriceIdDocument,
      { id: price_id }
    );

    let emailContent: any;
    let redirectUrl: string;

    // If the user is not logged in and the checkout email is not used, we create a new user in the database
    if (!appSession && !existingUser) {
      const generatedPassword = generator.generate({
        length: 10,
        numbers: true,
        uppercase: true,
        symbols: true,
        strict: true,
      });
      const createdUser = await prisma.user.create({
        data: {
          email: customerEmail,
          password: await bcrypt.hash(generatedPassword, 10),
          subscribtionPlan: subscriptionPlan.subscribtion_plan[0].name!,
          stripeCustomerId: customer.id,
          stripeSubscribtionId: subscription_id,
        },
      });
      redirectUrl = `/email-sent/${createdUser.id}`;
      const token = await generateVerificationEmailToken(createdUser.id);

      // Send email with generated password and link to verify email and receipt
      emailContent = baseTemplate({
        title: 'Thank you for your subscription !',
        subtitle: `Thank you for your trust in our service. Here is your generated password: <b>${generatedPassword}</b><br>Please click the button below to activate your account.`,
        buttonLink: `${process.env.NEXT_URL}/api/verify-email/${token}`,
        buttonText: 'Activate account',
        additionalText: 'This link will expire in 5 days.',
      });
    } else {
      redirectUrl = `/email-sent/${appSession?.user.id || existingUser?.id}`;
      const userId = appSession ? appSession.user.id : existingUser?.id;
      const gqlClient = await setupUnauthenticatedGraphQLClient(req, res);

      const updatedUser = await gqlClient!.request(
        UpdateUserSubscriptionPlanDocument,
        {
          id: userId,
          stripe_customer_id: customer.id,
          subscribtion_plan: subscriptionPlan.subscribtion_plan[0].name!,
          subscribtion_id: subscription_id,
        }
      );

      if (!updatedUser.update_auth_user_by_pk?.id) {
        return res
          .status(500)
          .json({ statusCode: 500, message: 'Internal Server Error' });
      }

      // Send email with invoice and link to dashboard and receipt
      emailContent = baseTemplate({
        title: 'Thank you for your subscription !',
        subtitle:
          'Thank you for your trust in our service.<br>Click the button below to access your dashboard.',
        buttonLink: `${process.env.NEXT_URL}/dashboard/`,
        buttonText: 'Go to dashboard',
        additionalText: '',
      });
    }
    try {
      await sendEmail({
        to: customerEmail,
        subject: 'Subscription',
        html: emailContent,
      });
    } catch (err) {
      console.error(err);
    }

    // TODO: Add toasts to the front-end to inform the user about the email sent
    // TODO: Need to reaload the user session to update the user subscribtion plan
    res.writeHead(302, {
      Location: redirectUrl,
    });
    res.end();
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ statusCode: 500, message: 'Internal Server Error' });
  }
}
