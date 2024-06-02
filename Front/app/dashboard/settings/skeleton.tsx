
'use client'
import React, { useState } from 'react';
import General from './General';
import Security from './Security';
import { useSearchParams } from 'next/navigation'
import Billing from './Billing';
import Notifications from './Notifications';


export default function Skeleton({ subscriptionPlan, price, cardLast4digits, cardBrand, nextBillingDate, canceledAtPeriodEnd }: { subscriptionPlan: string, price: string, cardLast4digits: string, cardBrand: string, nextBillingDate: string, canceledAtPeriodEnd: boolean }) {
  const searchParams = useSearchParams()
  const param = searchParams?.get('tab')

  if (param === 'security') {
    return (
      <Security />
    );
  }
  else if (param === 'notifications') {
    return (
      <Notifications />
    );
  }
  else if (param === 'billing') {
    return (
      <Billing subscriptionPlan={subscriptionPlan} price={price} nextBillingDate={nextBillingDate} cardLast4digits={cardLast4digits} cardBrand={cardBrand} canceledAtPeriodEnd={canceledAtPeriodEnd}/>
    );
  }
  else {
    return (
        <General/>
    );
  }
}
