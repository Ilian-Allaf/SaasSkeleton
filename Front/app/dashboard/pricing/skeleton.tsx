
'use client'
import React from 'react';
import { useSession} from 'next-auth/react'
// import "../globals.css";
import PricingPlan from '@/components/PricingPlan';

export default function Skeleton() {
  const { data: session } = useSession();

  return (
    <div> 
      <PricingPlan />
    </div>
  );
}
