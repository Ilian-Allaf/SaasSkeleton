'use client'

import React, { Suspense } from 'react';
import { useMutation } from '@tanstack/react-query';
import "../../globals.css";
import SendEmailSuccess from '@/components/SendEmailSuccess';
import { useTranslation } from '@/i18n/client'
import { ResendSubscriptionEmail } from '@/actions/subscriptionActions/resendSubscriptionEmail';

export default function Skeleton({email, userId}: {email: string | undefined, userId:string}) {
  const { t } = useTranslation('email-sent')
  const {
    mutate: server_resendSubscriptionEmail,
    isPending,
  } = useMutation({
    mutationFn: ResendSubscriptionEmail,
    // onSuccess: () => {},
    // onError: (error) => {}
  });

  return(
      <SendEmailSuccess
        title={t("check-email")}
        subtitle={`${t("sent-email-message-1")} ${email} ${t("sent-email-message-2")}`}
        resendSubtitle={`${t("resent-email-message-1")} ${email}${t("resent-email-message-2")}`}
        redirectionLink='/dashboard'
        redirectionText={t("back-to-dashboard")}
        handleResend={async () => server_resendSubscriptionEmail({userId: userId})}
        isSending={isPending}
      />
  );
}
