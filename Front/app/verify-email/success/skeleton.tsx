'use client'

// Import the necessary modules
import React from 'react';
import Head from 'next/head';
import "../../globals.css";
import { CheckCircleIcon } from '@heroicons/react/solid';

// Define the EmailVerificationSuccess component
function EmailVerificationSuccess() {
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
            <p className="mt-2 text-sm text-gray-500">
              You have successfully verified your email.
            </p>
          </div>
          <div className="mt-2 text-center">  
            <p>
              <a href="/login" className="text-indigo-600 hover:underline">
              Go back to Log in
              </a>
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
