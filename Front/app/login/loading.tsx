import { buttonVariants } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation } from '@/i18n/index';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function Loading() {
  const { t } = await useTranslation('signup');

  return (
    <>
      <div className="container relative flex flex-col items-center justify-center h-screen md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          {t('login')}
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            {process.env.NEXT_PUBLIC_SAAS_NAME}
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                <Skeleton className="h-8 col-start-2 col-end-2" />
              </h1>
            </div>
            <div className="space-y-3">
              <Skeleton className="h-5 col-start-1 col-end-4" />
              <Skeleton className="h-10 col-start-1 col-end-4" />
              <Skeleton className="h-8 col-start-1 col-end-4" />
              <Skeleton className="h-10 col-start-1 col-end-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
