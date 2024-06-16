'use client';

import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/navigation';

// Define the EmailVerificationSuccess component
export default function InvalidLink({ texts }: { texts: any }) {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <ExclamationCircleIcon className="mx-auto h-20 w-20 text-red-500" />
            <h2 className="mt-2 text-3xl font-extrabold">
              {texts.InvalidLinkTitle}
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {texts.invalidLinkMessage}
            </p>
          </div>
          <div className="mt-2 text-center">
            <p>
              <a
                onClick={() => router.push('/login')}
                className="hover:underline cursor-pointer"
              >
                {texts.backToLogin}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
