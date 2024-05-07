// components/ProfileForm.js
import React, { useState } from 'react';
import { useTranslation } from '@/i18n/client'
import ToggleButton from '@/components/ToggleButton';


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
      <h1 className="text-m font-medium">Notifications</h1>
      <p className="text-sm text-gray-600 mb-4"></p>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {notificationItems.map((item, index) => (
          <div key={index} className="grid grid-cols-2 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>

            <div className="col-span-1 flex justify-end cursor-pointer">
              <ToggleButton checked={item.checked} onClick={item.action}/>
            </div>
            {index !== notificationItems.length - 1 && (
              <div className="col-start-1 col-end-4 border-t border-gray-200 mt-5" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Notification;
