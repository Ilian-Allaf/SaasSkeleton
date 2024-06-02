"use client"

import React, { useState } from 'react';
import { useSearchParams  } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

interface SideBarProps extends React.HTMLAttributes<HTMLElement> {
  items: { icon: JSX.Element, label: string }[];
}

function Sidebar({ className, items, ...props }: SideBarProps) {
  const { t } = useTranslation('settings')
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
  };

  return (
    <nav className={cn(
      "overflow-x-scroll scrollbar-hide flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
      className,
      {...props}
    )}>
        {settingsItems.map((item, index) => (
          <Link 
              key={index}
              href={`/dashboard/settings?tab=${item.label}`}
              onClick={() => handleItemClick(index)}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                item.selected
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-secondary/90 hover:underline",
                "justify-start"
              )}
            >
              <span className="mr-2">{item.icon}</span> {item.name}
            </Link>
        ))}
    </nav>
  );
}

export default Sidebar;
