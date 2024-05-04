
'use client'
import React from 'react';
import "../../globals.css";
import Button from '@/components/Button';
import SelectableCard from '@/components/SelectableCard';
import { CheckIcon } from '@heroicons/react/outline';
import { GetSubscribtionPlansQuery, GetUserQuery } from "@/src/gql/graphql";
import { useTranslation } from '@/i18n/client'

export default function Skeleton({ subscribtionPlans, priceMap, userPlan }: { subscribtionPlans: GetSubscribtionPlansQuery, priceMap: { [key: string]: number }, userPlan: GetUserQuery }) {
  const { t } = useTranslation('pricing')

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
        window.location.href = (await response.json()).url;
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };
  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl leading-9 font-extrabold">
            {t("title")}
          </h2>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:max-w-3xl">
          {t("subtitle")}
          </p>
        </div>

        <div className="mt-10">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {subscribtionPlans.subscribtion_plan.map(plan => {
              const price_id = plan.id;
              const price = priceMap[price_id];

              if (!price) return null;
              const features = plan.subscribtion_plan_subscribtion_feature_assocs.map(feature => feature.subscribtionFeatureBySubscribtionFeature.text_content.translations[0].translation);

              return (
                <li key={price_id} className="flex flex-col">
                  <SelectableCard clickable={userPlan.auth_user_by_pk?.subscribtion_plan !== plan.name}>
                    <h3 className="text-lg leading-6 font-medium">{plan.text_content.translations[0].translation}</h3>
                    <p className="mt-4">
                      <span className="text-4xl font-extrabold">${price/100}</span>
                      {t("permonth")}
                    </p>
                    <Button label={userPlan.auth_user_by_pk?.subscribtion_plan === plan.name ? <CheckIcon className="h-6 w-6 text-white" /> : t("button")} onClick={() => Subscribe(price_id)} other="mt-6" />
                    <ul className="mt-6 space-y-4 flex-1">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-green-500" />
                          </div>
                          <p className="ml-3 text-sm leading-5">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </SelectableCard>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
