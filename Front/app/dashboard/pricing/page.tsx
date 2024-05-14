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
  console.log("languageCode" + languageCode)

  const session = await getServerSession(authOptions)
  const gqlClient = await setupGraphQLClient();
  if(!session){
      return {
          error: 'Not Authenticated',
      };
  };
  const userPlan = await gqlClient!.request( GetUserDocument, { id: session.user.id } );
  console.log("userPlan" + userPlan)
  const subscribtionPlans = await gqlClient!.request( GetSubscribtionPlansDocument, { languageCode: languageCode } );
  console.log("subscribtionPlans" + subscribtionPlans)
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2023-10-16' });

  const priceMap = {};

  if (!subscribtionPlans || !subscribtionPlans.subscribtion_plan) {
    // Handle the case where subscribtionPlans is null or subscribtion_plan is not available
    console.error('Subscription plans not available');
}
else {
  for (const subscribtionPlan of subscribtionPlans.subscribtion_plan) {
    const price = await stripe.prices.retrieve(subscribtionPlan.id);
    console.log("price" + price)
    priceMap[subscribtionPlan.id] = price.unit_amount;
  }
}


  console.log("priceMap" + priceMap)
  return (
    <>
      <Skeleton subscribtionPlans={subscribtionPlans} priceMap={priceMap} userPlan={userPlan}/>
    </>
  )
};
