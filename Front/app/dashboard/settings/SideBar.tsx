// components/Sidebar.js
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { FingerPrintIcon, UserCircleIcon, BellIcon, CreditCardIcon } from '@heroicons/react/outline';

function Sidebar() {
  const switchThemeDuration = process.env.SWITCH_THEME_DURATION;

  const [menuItems, setMenuItems] = useState([
    { name: 'General', icon: <UserCircleIcon className="h-5 w-5" />, selected: true, label: 'general' },
    { name: 'Security', icon: <FingerPrintIcon className="h-5 w-5" />, selected: false, label: 'security' },
    { name: 'Notifications', icon: <BellIcon className="h-5 w-5" />, selected: false, label: 'notifications' },
    { name: 'Billing', icon: <CreditCardIcon className="h-5 w-5" />, selected: false, label: 'billing' },
  ]);

  const pathname = usePathname()
  const router = useRouter()

  const handleItemClick = (index) => {
    const updatedMenuItems = menuItems.map((item, i) => {
      return { ...item, selected: i === index };
    });
    setMenuItems(updatedMenuItems);
    router.push(`${pathname}?tab=${menuItems[index].label}`);

  };

  return (
    <div className="">
      <ul className="text-sm font-medium">
        {menuItems.map((item, index) => (
          <>
            {item.selected ? 
            <li
              key={index}
              className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800 hover:text-indigo-700 bg-gray-100 dark:bg-gray-800 text-indigo-700 dark:hover:text-gray-300 dark:text-gray-300 ${switchThemeDuration}`}
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
