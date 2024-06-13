'use server';

import { useTranslation } from '@/i18n/index';
import { setupGraphQLClient } from '@/lib/gqlClient';
import { GetUserDocument, GetUserQuery } from '@/src/gql/graphql';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import Stripe from 'stripe';

export async function RemovePendingCancellation(): Promise<any> {
  const { t } = await useTranslation('settings');
  const gqlClient = await setupGraphQLClient();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
  });

  let user: GetUserQuery;
  const session = await getServerSession(authOptions);
  if (!session) {
    return {
      error: {
        message: 'Not authenticated',
        field: null,
      },
    };
  }
  user = await gqlClient!.request(GetUserDocument, { id: session.user.id });
  if (!user?.auth_user_by_pk) {
    return {
      error: {
        message: 'No user found',
        field: null,
      },
    };
  } else if (!user?.auth_user_by_pk?.subscribtion_plan) {
    return {
      error: {
        message: t('billing.not-subscribed'),
        field: null,
      },
    };
  }

  await stripe.subscriptions.update(
    user.auth_user_by_pk.stripe_subscribtion_id!,
    {
      cancel_at_period_end: false,
    }
  );
}
