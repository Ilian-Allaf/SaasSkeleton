import InvalidLink from '@/components/InvalidLink';
import { buttonVariants } from '@/components/ui/button';
import { useTranslation } from '@/i18n/index';
import { prisma } from '@/lib/prismaClient';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Skeleton from './skeleton';

export default async function Page({ params }: { params: { token: string } }) {
  const token = params.token;
  const { t } = await useTranslation('reset-password');
  const { t: tInvalidLink } = await useTranslation('invalid-link');
  const texts = {
    password: t('password'),
    confirmPassword: t('confirm-password'),
    continue: t('continue'),
    passwordsDontMatch: t('passwords-dont-match'),
    passwordRequirements: t('permissive-password-requirements'),
    passwordResetSuccess: t('password-reset-success'),
  };
  //get userId Where token = token
  // check resetAt is null
  // check createdAt is less than 4 hours
  // const passwordResetToken1 = await prisma.passwordResetToken.findUnique({
  //   where: {
  //     token,
  //   },
  // });
  // const latestUserPasswordResetToken = await prisma.passwordResetToken.findFirst({
  //   where: {
  //     userId: passwordResetToken1.userId,
  //   },
  //   orderBy: {
  //     createdAt: 'desc',
  //   },
  // });
  //get latest token where userId = userId
  // check token is equal to previously fectch token
  const passwordResetToken = await prisma.passwordResetToken.findUnique({
    where: {
      token,
      createdAt: { gt: new Date(Date.now() - 1000 * 60 * 60 * 4) }, // 4h
      resetAt: null,
      isValid: true,
    },
  });
  if (!passwordResetToken) {
    const texts = {
      InvalidLinkTitle: tInvalidLink('invalid-link-title'),
      invalidLinkMessage: tInvalidLink('invalid-link-message'),
      backToLogin: tInvalidLink('back-to-login'),
    };
    return <InvalidLink texts={texts} />;
  }
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
                {t('choose-new-password')}
              </h1>
            </div>
            <Skeleton texts={texts} token={token} />
            {/* <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
