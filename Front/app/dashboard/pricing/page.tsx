import React from 'react'
import Skeleton from './skeleton'
import Stripe from 'stripe';
import { cookies } from 'next/headers'

import { authOptions } from "@/auth/[...nextauth]";
import { setupGraphQLClient } from "@/lib/gqlclient";
import { GetSubscribtionPlansDocument } from "@/src/gql/graphql";
import { getServerSession } from "next-auth"


export default async function page() {
  const cookieStore = cookies();
  const languageCode = cookieStore.get('i18next')?.value as string;

  const session = await getServerSession(authOptions)
  const gqlClient = await setupGraphQLClient();
  if(!session){
      return {
          error: 'Not Authenticated',
      };
  };
  
  const subscribtion_plans = await gqlClient!.request( GetSubscribtionPlansDocument, { languageCode: languageCode } );
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2023-10-16' });
  const prices = await stripe.prices.list({ active: true });
  
  const priceMap = {};
  prices.data.forEach(price => {
    priceMap[price.id] = price.unit_amount;
  });

  return (
    <>
      <Skeleton subscribtion_plans={subscribtion_plans} priceMap={priceMap}/>
    </>
  )
};
