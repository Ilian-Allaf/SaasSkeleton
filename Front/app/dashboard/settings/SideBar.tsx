"use client"

import React, { useState } from 'react';
import { usePathname, useSearchParams  } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client'

export interface SideBarProps {
  items: { icon: JSX.Element, label: string }[];
}

function Sidebar({ items }: SideBarProps) {
  const { t } = useTranslation('settings')
  const switchThemeDuration = process.env.SWITCH_THEME_DURATION;
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams!.get('tab')

  const settingsItems = items.map(item => ({ ...item, name: t(`sidebar.${item.label}`), selected: item.label === search}));

  const [menuItems, setMenuItems] = useState(settingsItems);

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
        {settingsItems.map((item, index) => (
          <>
            {item.selected ? 
            <li
              key={index}
              className={`flex items-center rounded-md p-3 hover:rounded hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800 hover:text-indigo-700 bg-gray-200 dark:bg-gray-800 text-indigo-700 dark:hover:text-gray-300 dark:text-gray-300 ${switchThemeDuration}`}
              onClick={() => handleItemClick(index)}
              >
              <span className="mr-2">{item.icon}</span> {item.name}
            </li>
            :
            <li
              key={index}
              className={`flex items-center rounded-md p-3 hover:rounded hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800 hover:text-indigo-700 dark:hover:text-gray-300`}
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
