// components/Sidebar.js
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams  } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { FingerPrintIcon, UserCircleIcon, BellIcon, CreditCardIcon } from '@heroicons/react/outline';
import { useTranslation } from '@/i18n/client'
import { SwitchLanguageProps } from './skeleton';


function Sidebar({ switchLanguage, setSwitchLanguage }: SwitchLanguageProps) {
  const { t } = useTranslation('settings')
  const switchThemeDuration = process.env.SWITCH_THEME_DURATION;
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams!.get('tab')

  const items = [
    { name: t("sidebar.general"), icon: <UserCircleIcon className="h-5 w-5" />, selected: search ==="general", label: 'general' },
    { name: t("sidebar.security"), icon: <FingerPrintIcon className="h-5 w-5" />, selected: search ==="security", label: 'security' },
    { name: t("sidebar.notifications"), icon: <BellIcon className="h-5 w-5" />, selected: search ==="notifications", label: 'notifications' },
    { name: t("sidebar.billing"), icon: <CreditCardIcon className="h-5 w-5" />, selected: search ==="billing", label: 'billing' },
  ]

  const [menuItems, setMenuItems] = useState(items);



  const handleItemClick = (index) => {
    const updatedMenuItems = menuItems.map((item, i) => {
      return { ...item, selected: i === index };
    });
    setMenuItems(updatedMenuItems);
    router.push(`${pathname}?tab=${menuItems[index].label}`);
  };

  useEffect(() => {
    setMenuItems(items);
    setSwitchLanguage(false)
  }, [switchLanguage]);


  return (
    <div className="">
      <ul className="text-sm font-medium">
        {menuItems.map((item, index) => (
          <>
            {item.selected ? 
            <li
              key={index}
              className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800 hover:text-indigo-700 bg-gray-200 dark:bg-gray-800 text-indigo-700 dark:hover:text-gray-300 dark:text-gray-300 ${switchThemeDuration}`}
              onClick={() => handleItemClick(index)}
              >
              <span className="mr-2">{item.icon}</span> {item.name}
            </li>
            :
            <li
              key={index}
              className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800 hover:text-indigo-700 dark:hover:text-gray-300`}
              onClick={() => handleItemClick(index)}
              >
              <span className="mr-2">{item.icon}</span> {item.name}
              </li>
              }
          </>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
