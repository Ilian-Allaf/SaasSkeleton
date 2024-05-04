import React from 'react'
import Skeleton from './skeleton'
import Stripe from 'stripe';
import { cookies } from 'next/headers'

import { authOptions } from "@/auth/[...nextauth]";
import { setupGraphQLClient } from "@/lib/gqlclient";
import { GetSubscribtionPlansDocument, GetUserDocument } from "@/src/gql/graphql";
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
  const userPlan = await gqlClient!.request( GetUserDocument, { id: session.user.id } );
  const subscribtionPlans = await gqlClient!.request( GetSubscribtionPlansDocument, { languageCode: languageCode } );
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2023-10-16' });

  const prices = await stripe.prices.retrieve('price_1OdsBrBeHVeQHE2CJ5OCwSqm');
  const priceMap = {};
  
  for (const subscribtionPlan of subscribtionPlans.subscribtion_plan) {
    const price = await stripe.prices.retrieve(subscribtionPlan.id);
    priceMap[subscribtionPlan.id] = price.unit_amount;
  }

  console.log(priceMap)
  return (
    <>
      <Skeleton subscribtionPlans={subscribtionPlans} priceMap={priceMap} userPlan={userPlan}/>
    </>
  )
};
