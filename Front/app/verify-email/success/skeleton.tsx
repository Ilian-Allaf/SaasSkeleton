'use client';

// Import the necessary modules
import { GetUpdatedEmail } from '@/actions/userActions/getUpdatedEmail';
import { useTranslation } from '@/i18n/client';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import '../../globals.css';

// Define the EmailVerificationSuccess component
function EmailVerificationSuccess() {
  const { t } = useTranslation('verify-email-success');
  const { data: session, update } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const param = searchParams?.get('state');
  const [isSessionUpdated, setIsSessionUpdated] = useState(false);

  useEffect(() => {
    const fetchEmailAndUpdateSession = async () => {
      if (param === 'update' && !isSessionUpdated) {
        const email = await GetUpdatedEmail();
        setIsSessionUpdated(true);
        update({ email: email });
      }
    };

    fetchEmailAndUpdateSession();
  }, [param, isSessionUpdated, update]);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <CheckCircleIcon className="mx-auto h-20 w-20 text-green-500" />
            <h2 className="mt-2 text-3xl font-extrabold">{t('congrats')}</h2>
            {param === 'update' ? (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {t('successfully-verified-email-update')}
              </p>
            ) : (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {t('successfully-verified-email')}
              </p>
            )}
          </div>
          <div className="mt-2 text-center">
            <p>
              {param === 'update' ? (
                <a
                  onClick={() => router.push('/dashboard/settings?tab=general')}
                  className="hover:underline cursor-pointer"
                >
                  {t('back-to-settings')}
                </a>
              ) : (
                <a
                  onClick={() => router.push('/login')}
                  className="hover:underline cursor-pointer"
                >
                  {t('back-to-login')}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the component
export default function Skeleton() {
  return <EmailVerificationSuccess />;
}
