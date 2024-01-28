
'use client'
import React from 'react';
import "../../globals.css";
import Button from '@/components/Button';
import SelectableCard from '@/components/SelectableCard';
import { CheckIcon } from '@heroicons/react/outline';

type Plan = {
  name: string;
  price: number;
  features: string[];
  price_id: string;
};

export default function Skeleton({plans}: {plans:Plan[]}) {

  const Subscribe = async (price_id: string) => {
    try {
      const response = await fetch('/api/subscribtion/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price_id: price_id }),
      });
      if (!response.ok) {
        window.location.href =(await response.json()).url;
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };
  
  
  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold">
            Pricing plans for teams of all sizes
          </h2>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:max-w-3xl">
            Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>

        <div className="mt-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(plans).map(plan => (
              <li key={plan.name} className="flex flex-col">
                <SelectableCard>
                  <h3 className="text-lg leading-6 font-medium">{plan.name}</h3>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold">${plan.price}</span>
                    /month
                  </p>
                  <Button label='Buy plan' onClick={() => Subscribe(plan.price_id)} other="mt-6"/>
                  <ul className="mt-6 space-y-4 flex-1">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon  className="h-6 w-6 text-green-500"/>
                        </div>
                        <p className="ml-3 text-sm leading-5">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </SelectableCard>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
