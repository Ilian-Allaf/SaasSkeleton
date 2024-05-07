'use server'

import { prisma } from "@/lib/prismaclient";
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { useTranslation } from '@/i18n/index'
import Stripe from "stripe";
import { setupGraphQLClient } from "@/lib/gqlclient";
import { GetUserDocument } from "@/src/gql/graphql";


export async function CancelSubscribtion() {
    const { t } = await useTranslation('settings')
    const gqlClient = await setupGraphQLClient();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16'});

    try {
        const session = await getServerSession(authOptions)
        if(!session){
            return {
                error: 'Not Authenticated',
            };
        };

        const user = await gqlClient!.request( GetUserDocument, { id: session.user.id } );

        if (!user?.auth_user_by_pk?.id || !user?.auth_user_by_pk?.stripe_customer_id){
            return {
                error: t("billing.not-subscribed"),
            };
        }

        const test = await stripe.subscriptions.update(user.auth_user_by_pk.stripe_subscribtion_id!, {
            cancel_at_period_end: true,
        }); 

        // const webhook = await stripe.webhookEndpoints.create({
        //     url: 'https://your-api-url.com/webhook', // replace with your API URL
        //     enabled_events: ['customer.subscription.updated'],
        //   });


    }
    catch (error) {
        return {
            error: 'Internal Server Error',
        };
    };
    
}