'use client';

import { ResendSubscriptionEmail } from '@/actions/subscriptionActions/resendSubscriptionEmail';
import SendEmailSuccess from '@/components/SendEmailSuccess';
import useServerAction from '@/utils/customHook/useServerAction';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import '../../globals.css';

export default function Skeleton({
  email,
  userId,
  subscriptionPlan,
  texts,
}: {
  email: string | undefined;
  userId: string;
  subscriptionPlan: string | null | undefined;
  texts: any;
}) {
  const { data: session, update } = useSession();
  const [isSessionUpdated, setIsSessionUpdated] = useState(false);
  const { callableName: server_resendSubscriptionEmail, isPending } =
    useServerAction({
      action: ResendSubscriptionEmail,
      // onSuccess: () => {},
      // onError: (error) => {}
    });

  useEffect(() => {
    const fetchEmailAndUpdateSession = async () => {
      if (session && !isSessionUpdated) {
        setIsSessionUpdated(true);
        update({ subscriptionPlan: subscriptionPlan });
      }
    };
    fetchEmailAndUpdateSession();
  }, [isSessionUpdated, update]);

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
