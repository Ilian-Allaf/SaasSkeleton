'use client';

import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useTranslation } from '@/i18n/client';
import { useState } from 'react';

export default function NotificationsForm() {
  const { t } = useTranslation('settings');
  const [notificationItems, setNotificationItems] = useState([
    {
      label: t('notifications.new-offers'),
      action: () => {
        updateToggle(t('notifications.new-offers'));
      },
      checked: false,
    },
    {
      label: t('notifications.newsletter'),
      action: () => {
        updateToggle(t('notifications.newsletter'));
      },
      checked: false,
    },
  ]);

  const updateToggle = (label: string) => {
    setNotificationItems((prevItems) =>
      prevItems.map((item) =>
        item.label === label ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <>
      <div className="grid grid-rows gap-6 mt-6">
        {notificationItems.map((item, index) => (
          <div key={index} className="grid grid-cols-2 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>

            <div className="col-span-1 flex justify-end cursor-pointer">
              <Switch checked={item.checked} onCheckedChange={item.action} />
            </div>
            {index !== notificationItems.length - 1 && (
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
