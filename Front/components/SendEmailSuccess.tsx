import React, { useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Button from '@/components/Button';

interface SendEmailSuccessProps {
  title: string;
  subtitle: string;
  resendSubtitle?: string;
  handleResend?: (e: React.FormEvent) => Promise<void>;
}

const SendEmailSuccess: React.FC<SendEmailSuccessProps> = ({ title, subtitle, resendSubtitle, handleResend }) => {
  const [resendClicked, setResendClicked] = useState(false);

  const handleResendClick = (e: React.FormEvent) => {
    setResendClicked(true);
    if (handleResend) {
      handleResend(e);
    }
  };

  return (
    <>
      <Head>
        <title>Email Sent Success</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-16 w-16 text-grey-500">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">{title}</h2>
            <p className="mt-2 text-sm text-gray-500">
              {resendClicked ? resendSubtitle : subtitle}
            </p>
          </div>
          {handleResend && (
            <Button width="w-1/7" label="Resend email" center={true} onClick={handleResendClick} />
          )}

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
};

SendEmailSuccess.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  resendSubtitle: PropTypes.string,
  handleResend: PropTypes.func,
};

export default SendEmailSuccess;
