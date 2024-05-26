'use server'

import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { useTranslation } from '@/i18n/index'
import Stripe from "stripe";
import { setupGraphQLClient } from "@/lib/gqlClient";
import { GetUserDocument } from "@/src/gql/graphql";


export async function CancelSubscription(end: String, removePendingCancellation?: Boolean) {
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
        if (end === 'now') {
            await stripe.subscriptions.cancel(user.auth_user_by_pk.stripe_subscribtion_id!);
        }
        else if (end === 'period_end') {
            await stripe.subscriptions.update(user.auth_user_by_pk.stripe_subscribtion_id!, {
                cancel_at_period_end: !removePendingCancellation || true,
            });
        }
    }
    catch (error) {
        return {
            error: 'Internal Server Error',
        };
    };
    
}