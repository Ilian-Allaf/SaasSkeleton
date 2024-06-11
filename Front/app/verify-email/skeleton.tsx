'use client';

// Import the necessary modules
import { ResendVerificationEmail } from '@/actions/resendVerificationEmail';
import SendEmailSuccess from '@/components/SendEmailSuccess';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import '../globals.css';

// Define the EmailVerificationSuccess component
export default function Skeleton({
  texts,
  email,
}: {
  texts: any;
  email: string;
}) {
  const { mutate: server_resendVerificationEmail, isPending: isResending } =
    useMutation({
      mutationFn: async () => {
        await ResendVerificationEmail();
      },
      onSuccess: () => {},
      onError: () => {
        toast.error(texts.errorResendingEmail);
      },
    });

  return (
    <>
      <SendEmailSuccess
        title={texts.checkEmail}
        subtitle={`${texts.sentEmailMessage1} ${email} ${texts.sentEmailMessage2}`}
        resendSubtitle={`${texts.resentEmailMessage1} ${email} ${texts.resentEmailMessage2}`}
        resendButtonText={texts.resendEmail}
        isSending={isResending}
        handleResend={async () => server_resendVerificationEmail()}
        redirectionText={texts.backToDashboard}
      />
    </>
  );
}
