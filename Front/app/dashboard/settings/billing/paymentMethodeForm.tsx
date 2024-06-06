'use client';

import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/i18n/client';
import { useSubscriptionStore } from '@/store/store';
import { PencilIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
export default function PaymentMethodeForm({
  defaultWillSubscriptionEnd,
  nextBillingDate,
  cardLast4digits,
  cardBrand,
}: {
  defaultWillSubscriptionEnd: boolean;
  nextBillingDate: string;
  cardLast4digits: string;
  cardBrand: string;
}) {
  const { t } = useTranslation('settings');
  const { willSubscriptionEnd } = useSubscriptionStore();

  const [profileItems, setProfileItems] = useState([
    {
      label: cardBrand,
      value: `**** **** **** ${cardLast4digits}`,
      updateSetting: () => {},
    },
    {
      label: t('billing.next-billing'),
      value: defaultWillSubscriptionEnd
        ? t('billing.no-billing-planned')
        : nextBillingDate,
      updateSetting: () => {},
    },
  ]);

  useEffect(() => {
    setProfileItems(
      profileItems.map((item) =>
        item.label === t('billing.next-billing')
          ? {
              ...item,
              value: willSubscriptionEnd
                ? t('billing.no-billing-planned')
                : nextBillingDate,
            }
          : item
      )
    );
  }, [willSubscriptionEnd]);

  return (
    <>
      <div className="grid grid-rows gap-6 mt-6">
        {profileItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-left text-sm">{item.value}</div>
            <span
              className="col-span-1 flex justify-end cursor-pointer"
              onClick={() => item.updateSetting()}
            >
              {item.label !== t('billing.next-billing') ? (
                <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
              ) : null}
            </span>
            {index !== profileItems.length - 1 && (
              <Separator
                orientation="horizontal"
                className="col-start-1 col-end-4 mt-5 "
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
