'use client';

import { Separator } from '@/components/ui/separator';
import { PencilIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SubscriptionForm({
  subscriptionPlan,
  price,
}: {
  subscriptionPlan: string;
  price: string;
}) {
  const router = useRouter();
  const [subscriptionItems] = useState([
    {
      label: subscriptionPlan,
      value: price,
      updateSetting: () => {
        router.push('/dashboard/pricing');
      },
    },
  ]);

  return (
    <div>
      <div className="grid grid-rows gap-6 mt-6">
        {subscriptionItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-left text-sm">{item.value}</div>
            <span
              className="col-span-1 flex justify-end cursor-pointer"
              onClick={() => item.updateSetting()}
            >
              <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== subscriptionItems.length - 1 && (
              <Separator
                orientation="horizontal"
                className="col-start-1 col-end-4 mt-5 "
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
