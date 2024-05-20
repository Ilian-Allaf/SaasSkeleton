"use server"

import Skeleton from './skeleton'
import Stripe from 'stripe';
import { cookies } from 'next/headers'

import { authOptions } from "@/auth/[...nextauth]";
import { setupUnauthenticatedGraphQLClient } from "@/lib/unauthenticatedGqlClient";
import { setupGraphQLClient } from "@/lib/gqlClient";
import { GetSubscriptionPlansDocument, GetUserDocument, GetUserQuery } from "@/src/gql/graphql";
import { getServerSession } from "next-auth"

export default async function page() {
  const cookieStore = cookies();
  const languageCode = cookieStore.get('i18next')?.value as string;

  const session = await getServerSession(authOptions)
  const gqlClient = session ? await setupGraphQLClient(): await setupUnauthenticatedGraphQLClient();
  let userPlan: GetUserQuery = {};
  if(session){
    userPlan = await gqlClient!.request( GetUserDocument, { id: session.user.id } );
  };

  const subscribtionPlans = await gqlClient!.request( GetSubscriptionPlansDocument, { languageCode: languageCode } );
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2023-10-16' });

  const priceMap = {};
  for (const subscribtionPlan of subscribtionPlans.subscribtion_plan) {
    const price = await stripe.prices.retrieve(subscribtionPlan.id);
    priceMap[subscribtionPlan.id] = price.unit_amount;
  }


  return (
    <>
      <Skeleton subscribtionPlans={subscribtionPlans} priceMap={priceMap} userPlan={userPlan}/>
    </>
  )
};
