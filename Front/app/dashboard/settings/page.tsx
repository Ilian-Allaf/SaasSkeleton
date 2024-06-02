import React from 'react'
import Skeleton from './skeleton'
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { FingerPrintIcon, UserCircleIcon, BellIcon, CreditCardIcon } from '@heroicons/react/outline';
import SideBar from './SideBar'
import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/i18n/index';
import Stripe from 'stripe';
import { setupGraphQLClient } from "@/lib/gqlClient";
import { GetUserDocument, GetSubscriptionPlanIdByNameDocument } from '@/src/gql/graphql';

function capitalizeFirstLetter(string) {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function Page() {
  const session = await getServerSession(authOptions)
  const { t } = await useTranslation('settings')
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16'});
  const gqlClient = await setupGraphQLClient();

  if(!session){
    return {
        error: 'Not Authenticated',
    };
  };
  let subscriptionPlan: string = '-';
  let priceString: string = '-';
  let cardLast4digits: string = '-';
  let cardBrand: string = '-';
  let nextBillingDate: string = '-';
  let canceledAtPeriodEnd: boolean = false;


  const user = await gqlClient!.request( GetUserDocument, { id: session.user.id } );
  if (user?.auth_user_by_pk?.id && user?.auth_user_by_pk?.subscribtion_plan && user?.auth_user_by_pk?.stripe_customer_id && user?.auth_user_by_pk?.stripe_subscribtion_id) {
    const subscriptionPlanId = await gqlClient!.request( GetSubscriptionPlanIdByNameDocument, { name: user.auth_user_by_pk.subscribtion_plan  } );
    const price = await stripe.prices.retrieve(subscriptionPlanId.subscribtion_plan[0].id);
    priceString = `${price.unit_amount! / 100}$/${price.recurring?.interval}`
  
    const subscription = await stripe.subscriptions.retrieve(user.auth_user_by_pk.stripe_subscribtion_id);
    nextBillingDate = new Date(subscription.current_period_end * 1000).toLocaleDateString();
    canceledAtPeriodEnd = subscription.cancel_at_period_end;
  
    const paymentMethods = await stripe.paymentMethods.list({
      customer: user.auth_user_by_pk.stripe_customer_id,
      type: 'card',
    });  
    const card = paymentMethods.data[0].card;
  
    if(!card){
      return {
          error: 'No card',
      };
    };
    cardLast4digits = card.last4;
    cardBrand = card.brand;
  }
  else {
    console.error('Not subscribed');
  }



  const items = [
    { icon: <UserCircleIcon className="h-5 w-5" />, label: 'general'},
    { icon: <FingerPrintIcon className="h-5 w-5" />, label: 'security' },
    { icon: <BellIcon className="h-5 w-5" />, label: 'notifications' }
  ]
  if (session.user.subscriptionPlan) {
    items.push({ icon: <CreditCardIcon className="h-5 w-5" />, label: 'billing' })
    subscriptionPlan = capitalizeFirstLetter(session.user.subscriptionPlan);
  }

  return (
     <div className="space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">{t("title")}</h2>
        <p className="text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SideBar items={items} />
        </aside>
        <div className="flex-1 lg:max-w-6xl">
          <Skeleton subscriptionPlan={subscriptionPlan} price={priceString} cardLast4digits={cardLast4digits} cardBrand={capitalizeFirstLetter(cardBrand)} nextBillingDate={nextBillingDate} canceledAtPeriodEnd={canceledAtPeriodEnd}/>
        </div>
      </div>
    </div>
  )
}