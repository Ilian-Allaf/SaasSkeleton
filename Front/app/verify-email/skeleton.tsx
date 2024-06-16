'use client';

// Import the necessary modules
import { ResendVerificationEmail } from '@/actions/resendVerificationEmail';
import SendEmailSuccess from '@/components/SendEmailSuccess';
import useServerAction from '@/utils/customHook/useServerAction';
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
  const {
    callableName: server_resendVerificationEmail,
    isPending: isResending,
  } = useServerAction({
    action: () => ResendVerificationEmail(),
    onSuccess: () => {},
    onError: () => {
      toast.error(texts.errorResendingEmail);
    },
  });

  return (
    <>
      <SendEmailSuccess
        title={texts.checkEmail}
        subtitle={`${texts.sentEmailMessage1} ${email}${texts.sentEmailMessage2}`}
        resendSubtitle={`${texts.resentEmailMessage1} ${email}${texts.resentEmailMessage2}`}
        resendButtonText={texts.resendEmail}
        isSending={isResending}
        handleResend={async () => server_resendVerificationEmail()}
        redirectionText={texts.backToDashboard}
      />
    </>
  );
}
