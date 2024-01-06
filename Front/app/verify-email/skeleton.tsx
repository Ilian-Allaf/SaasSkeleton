'use client'

// Import the necessary modules
import React from 'react';
import "../globals.css";
import SendEmailSuccess from '@/components/SendEmailSuccess';
import { useSession} from 'next-auth/react'

// Define the EmailVerificationSuccess component
function EmailSentSuccess() {
  const { data: session } = useSession();

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
      }
    } catch (error) {
      console.error('An error occurred when signed up', error);
    }
  };
  return (
    <>
      <SendEmailSuccess
        title={'Check your emails !'}
        subtitle={`Please check the email address ${ session?.user.email } for instructions to verify your email.`}
        resendSubtitle={`We've resent the email to ${session?.user.email} with further instructions to verify your email.`}
        handleResend={(e: React.FormEvent) => handleResend(e)}
        />
    </>
  );
}


// Export the component
export default function Skeleton() {
  return <EmailSentSuccess />;
}
