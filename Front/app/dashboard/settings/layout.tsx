'use client';

import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/i18n/client';
import { SidebarNav } from 'app/dashboard/settings/components/sidebar-nav';
import { useSession } from 'next-auth/react';

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const { t } = useTranslation('settings');
  const { data: session } = useSession();

  if (!session) {
    return {
      error: 'Not Authenticated',
    };
  }

  const sidebarNavItems = [
    {
      title: t('sidebar.general'),
      href: '/dashboard/settings',
    },
    {
      title: t('sidebar.security'),
      href: '/dashboard/settings/security',
    },
    // {
    //   title: t('sidebar.notifications'),
    //   href: '/dashboard/settings/notifications',
    // },
  ];

  if (session.user.subscriptionPlan) {
    sidebarNavItems.push({
      title: t('sidebar.billing'),
      href: '/dashboard/settings/billing',
    });
  }

  return (
    <>
      <div className="space-y-6 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
