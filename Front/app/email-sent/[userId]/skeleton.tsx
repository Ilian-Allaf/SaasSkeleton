'use client';

import { ResendSubscriptionEmail } from '@/actions/subscriptionActions/resendSubscriptionEmail';
import SendEmailSuccess from '@/components/SendEmailSuccess';
import { useTranslation } from '@/i18n/client';
import { useMutation } from '@tanstack/react-query';
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
  const { t } = useTranslation('email-sent');
  const { mutate: server_resendSubscriptionEmail, isPending } = useMutation({
    mutationFn: ResendSubscriptionEmail,
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
