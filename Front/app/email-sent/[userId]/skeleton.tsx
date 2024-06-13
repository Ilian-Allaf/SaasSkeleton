'use client';

import { ResendSubscriptionEmail } from '@/actions/subscriptionActions/resendSubscriptionEmail';
import SendEmailSuccess from '@/components/SendEmailSuccess';
import useServerAction from '@/utils/customHook/useServerAction';
import '../../globals.css';

export default function Skeleton({
  email,
  userId,
  texts,
}: {
  email: string | undefined;
  userId: string;
  texts: any;
}) {
  const { callableName: server_resendSubscriptionEmail, isPending } =
    useServerAction({
      action: ResendSubscriptionEmail,
      // onSuccess: () => {},
      // onError: (error) => {}
    });

  return (
    <SendEmailSuccess
      title={texts.checkEmail}
      subtitle={`${texts.sentEmailMessage1} ${email} ${texts.sentEmailMessage2}`}
      resendSubtitle={`${texts.resentEmailMessage1} ${email} ${texts.resentEmailMessage2}`}
      resendButtonText={texts.resendEmail}
      isSending={isPending}
      handleResend={async () =>
        server_resendSubscriptionEmail({ userId: userId })
      }
      redirectionLink="/dashboard"
      redirectionText={texts.backToDashboard}
    />
  );
}
