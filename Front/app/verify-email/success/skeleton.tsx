'use client'

// Import the necessary modules
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import "../../globals.css";
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useSearchParams } from 'next/navigation'
import { useSession} from 'next-auth/react'
import { GetUpdatedEmail } from '@/actions/updateUserAcitons/getUpdatedEmail'
import { useRouter } from 'next/navigation';


// Define the EmailVerificationSuccess component
function EmailVerificationSuccess() {
  const { data: session, update  } = useSession();
  const router = useRouter()
  const searchParams = useSearchParams()
  const param = searchParams?.get('state')
  const [isSessionUpdated, setIsSessionUpdated] = useState(false);

  
  useEffect(() => {
    const fetchEmailAndUpdateSession = async () => {
      if (param === "update" && !isSessionUpdated) {
        const email = await GetUpdatedEmail();
        setIsSessionUpdated(true);
        update({ email: email });
      }
    };

    fetchEmailAndUpdateSession();
  }, [param, isSessionUpdated, update]);
  return (
    <>
      <Head>
        <title>Email Verification Success</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <CheckCircleIcon className="mx-auto h-20 w-20 text-green-500" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Congrats!</h2>
            {param === 'update' ? 
            <p className="mt-2 text-sm text-gray-500">
              You have successfully verified your email.
            </p>
            :
            <p className="mt-2 text-sm text-gray-500">
              You have successfully verified your email. Your email address is now updated.
            </p>
            }
          </div>
          <div className="mt-2 text-center">  
            <p>
            {param === 'update' ? 
              <a
                onClick={() => router.push('/dashboard/settings?tab=general')}
                className="text-indigo-600 hover:underline"
              >
                Go back to Settings
              </a>
              :
              <a
                onClick={() => router.push('/login')}
                className="text-indigo-600 hover:underline"
              >
                Go back to Log in
              </a>
            }
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
