import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useTranslation } from '@/i18n/client';
import { cn } from '@/lib/utils';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export default function NavigationBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const maxEmailLength = 30;
  const { data: session } = useSession();
  const { t } = useTranslation('navbar');
  const router = useRouter();
  const [isNavSheetOpen, setIsNavSheetOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: t('dashboard'), href: '/dashboard', current: false },
    { name: t('pricing'), href: '/dashboard/pricing', current: false },
    { name: t('settings'), href: '/dashboard/settings', current: false },
  ];

  return (
    <div className="flex-col md:flex">
      <SheetNavigationBar
        isNavSheetOpen={isNavSheetOpen}
        setIsNavSheetOpen={setIsNavSheetOpen}
        navigation={navigation}
      />
      <div className="border-b">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <HamburgerMenuIcon
            onClick={() => {
              setIsNavSheetOpen(true);
            }}
            className="h-4 w-4 md:hidden"
          />
          <div className="mr-4 hidden md:flex">
            <nav
              className={cn(
                'flex items-center space-x-4 lg:space-x-6',
                className
              )}
              {...props}
            >
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium ${
                    pathname === item.href ? '' : 'text-muted-foreground'
                  } transition-colors hover:text-primary`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeSwitcher />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                    <AvatarFallback>
                      {session?.user.email.substring(0, 1).toLocaleUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <p className="text-xs leading-none text-muted-foreground">
                            {session?.user?.email &&
                            session.user.email.length > maxEmailLength
                              ? `${session.user.email.substring(
                                  0,
                                  maxEmailLength
                                )}...`
                              : session?.user?.email || 'Anonymous'}
                          </p>
                        </TooltipTrigger>
                        {session?.user?.email &&
                        session.user.email.length > maxEmailLength ? (
                          <TooltipContent>
                            <p>{session?.user?.email}</p>
                          </TooltipContent>
                        ) : null}
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    onClick={() =>
                      router.push('/dashboard/settings/?tab=general')
                    }
                  >
                    {t('settings')}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  {t('signout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

function SheetNavigationBar({
  isNavSheetOpen,
  setIsNavSheetOpen,
  navigation,
}: {
  isNavSheetOpen: boolean;
  setIsNavSheetOpen: (value: boolean) => void;
  navigation: { name: string; href: string; current: boolean }[];
}) {
  const pathname = usePathname();
  return (
    <Sheet
      open={isNavSheetOpen}
      onOpenChange={() => {
        setIsNavSheetOpen(false);
      }}
    >
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="mx-2 font-bold mb-4">
            {process.env.NEXT_PUBLIC_SAAS_NAME}
          </SheetTitle>
        </SheetHeader>
        <div
          className="flex flex-col space-y-6"
          style={{ marginTop: '4%', marginLeft: '4%', marginRight: '2%' }}
        >
          {navigation.map((item, index) => (
            <Link
              onClick={() => {
                setIsNavSheetOpen(false);
              }}
              key={index}
              href={item.href}
              className={`text-md font-medium ${
                pathname === item.href ? '' : 'text-muted-foreground'
              } transition-colors hover:text-primary`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
