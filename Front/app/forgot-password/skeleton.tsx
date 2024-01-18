'use client'

import React, { useState } from 'react';
import "../globals.css";
import InputField from '@/components/InputField';
import InputError from '@/components/InputError';
import SendEmailSuccess from '@/components/SendEmailSuccess';


function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(""); 

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value.slice(0, 100);
    setEmail(newEmail);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus("200");
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('An error occurred when sending the email', error);
    }
  };

  return (
    <>
    {status === "200" ?
      <SendEmailSuccess
        title={'Check your emails !'}
        subtitle={`Please check the email address ${email} for instructions to reset your password.`}
        resendSubtitle={`We've resent the email to ${email} with further instructions to reset your password.`}
        handleResend={(e: React.FormEvent) => handleSubmit(e)}
      />
    :
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Reset your password</h2>
            <p className="mt-2 text-sm text-gray-500">
              We've sent an email with further instructions.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <InputField
                label="Email address"
                value={email}
                onChange={handleEmailChange}
                error={error ? true : false}
                maxLength={100}
              />
              {error && (<InputError error={error} />)}
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Continue
              </button>
            </div>
            <div className="mt-2 text-center">
              <p>
                <a href="/login" className="text-indigo-600 hover:underline">
                  Go back to Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    }
  </>
  );
}

export default function Skeleton() {
  return <ResetPassword />;
}
