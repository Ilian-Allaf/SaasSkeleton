// components/ProfileForm.js
import React, { useState } from 'react';
import { useTranslation } from '@/i18n/client'
import { PencilIcon } from '@heroicons/react/outline';
import Button from '@/components/Button';
import { CancelSubscribtion } from '@/actions/subscribtionActions/cancelSubscribtion';


function Billing() {
  return (
    <div className='space-y-20'>
      <div><PaymentMethodeFields /></div>
    </div>
  );
}


function PaymentMethodeFields() {
  const { t } = useTranslation('settings')
  const cardBrand = 'Visa';
  const last4digits = '4242';
  const [profileItems, setProfileItems] = useState([
    { label: cardBrand, value: `**** **** **** ${last4digits}`, updateSetting: () => {} },
  ]);

  return (
    <>
      <Button label="Stop Sub" onClick={() => CancelSubscribtion()}/>
      <h1 className="text-m font-medium">{t("billing.title")}</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{t("billing.subtitle")}</p>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {profileItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-left text-sm">{item.value}</div>
            <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => item.updateSetting()}>
              <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== profileItems.length - 1 && (
              <div className="col-start-1 col-end-4 border-t border-gray-200 mt-5" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}




export default Billing;
