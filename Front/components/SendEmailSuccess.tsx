import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

interface SendEmailSuccessProps {
  title: string;
  subtitle: string;
  resendSubtitle?: string;
  resendButtonText: string;
  isResending?: boolean;
  handleResend?: (e: React.FormEvent) => Promise<void>;
  redirectionLink?: string;
  redirectionText: string;
  isSending?: boolean;
}

const SendEmailSuccess: React.FC<SendEmailSuccessProps> = ({
  title,
  subtitle,
  resendSubtitle,
  resendButtonText,
  handleResend,
  redirectionLink = '/login',
  redirectionText,
  isSending = false,
}) => {
  const [resendClicked, setResendClicked] = useState(false);

  const handleResendClick = (e: React.FormEvent) => {
    setResendClicked(true);
    if (handleResend) {
      handleResend(e);
    }
  };

  return (
    <div className="container relative">
      <Head>
        <title>Email Sent Success</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-auto h-16 w-16 text-grey-500"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <h2 className="mt-2 text-3xl font-extrabold">{title}</h2>
            <div className="mt-2 text-sm text-gray-400">
              {!resendClicked ? (
                subtitle
              ) : isSending ? (
                <div className="space-y-2">
                  <Skeleton className="h-3 col-start-1 col-end-4" />
                  <Skeleton className="h-3 col-start-1 col-end-4" />
                </div>
              ) : (
                resendSubtitle
              )}
            </div>
          </div>
          {handleResend && (
            <Button
              className="group relative flex mx-auto"
              onClick={handleResendClick}
              loading={isSending}
            >
              {resendButtonText}
            </Button>
          )}

          <div className="mt-2 text-center">
            <p>
              <a href={redirectionLink} className={cn(labelVariants())}>
                {redirectionText}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SendEmailSuccess.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  resendSubtitle: PropTypes.string,
  handleResend: PropTypes.func,
};

export default SendEmailSuccess;
