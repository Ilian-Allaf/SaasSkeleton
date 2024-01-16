// components/Sidebar.js
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { FingerPrintIcon, UserCircleIcon, BellIcon, CreditCardIcon } from '@heroicons/react/outline';

function Sidebar() {

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
    <div className="bg-white text-gray-800">
      <ul className="text-sm font-medium">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center p-3 hover:bg-gray-50 hover:text-indigo-700 ${item.selected ? 'bg-gray-50  text-indigo-700' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <span className="mr-2">{item.icon}</span> {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
