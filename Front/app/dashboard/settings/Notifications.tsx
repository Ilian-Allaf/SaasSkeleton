// components/ProfileForm.js
import React, { useState } from 'react';
import { useTranslation } from '@/i18n/client'
import ToggleButton from '@/components/ToggleButton';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';


function Notification() {
  return (
    <div className='space-y-20'>
      <div><NotificationFields /></div>
    </div>
  );
}


function NotificationFields() {
  const { t } = useTranslation('settings')
  const [notificationItems, setNotificationItems] = useState([
    { label: t("notifications.new-offers"), action: () => {updateToggle(t("notifications.new-offers"))}, checked: false},
    { label: t("notifications.newsletter"), action: () => {updateToggle(t("notifications.newsletter"))}, checked: false},
  ]);

  const updateToggle = (label: string) => {
    setNotificationItems(prevItems => 
      prevItems.map(item => 
        item.label === label ? {...item, checked: !item.checked} : item
      )
    );
  };

  return (
    <>
      <h3 className="text-lg font-medium">Notifications</h3>
      <p className="text-sm text-gray-600 mb-4"></p>
      <Separator orientation='horizontal' className="col-start-1 col-end-4 mt-5 " />
      <div className="grid grid-rows gap-6 mt-6">
        {notificationItems.map((item, index) => (
          <div key={index} className="grid grid-cols-2 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>

            <div className="col-span-1 flex justify-end cursor-pointer">
              <Switch checked={item.checked} onCheckedChange={item.action}/>
            </div>
            {index !== notificationItems.length - 1 && (
              <Separator orientation='horizontal' className="col-start-1 col-end-4 mt-5 " />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Notification;
