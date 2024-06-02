'use server'

import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { useTranslation } from '@/i18n/index'
import Stripe from "stripe";
import { setupGraphQLClient } from "@/lib/gqlClient";
import { GetUserDocument, GetUserQuery } from "@/src/gql/graphql";



export async function RemovePendingCancellation() : Promise<void> {
    const { t } = await useTranslation('settings')
    const gqlClient = await setupGraphQLClient();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16'});

    let user: GetUserQuery;
    try {
        const session = await getServerSession(authOptions)
        if(!session){
            throw Error('Not authenticated');
        };
        user = await gqlClient!.request( GetUserDocument, { id: session.user.id } );
        if(!user?.auth_user_by_pk) {
            throw Error('No user found');
        }
        else if (!user?.auth_user_by_pk?.subscribtion_plan) {
            throw Error(t("billing.not-subscribed"));
        } 

        await stripe.subscriptions.update(user.auth_user_by_pk.stripe_subscribtion_id!, {
            cancel_at_period_end: false,
        });        
    } catch (error) {
        console.error(error);
        throw Error('Internal Server Error');
    }
}