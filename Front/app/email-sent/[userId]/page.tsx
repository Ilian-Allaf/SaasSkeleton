import { useTranslation } from '@/i18n/index';
import { prisma } from '@/lib/prismaClient';
import Skeleton from './skeleton';

export default async function Page({ params }) {
  const { t } = await useTranslation('email-sent');

  const userId = params.userId;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  const texts = {
    checkEmail: t('check-email'),
    resendEmail: t('resend-email'),
    sentEmailMessage1: t('sent-email-message-1'),
    sentEmailMessage2: t('sent-email-message-2'),
    resentEmailMessage1: t('resent-email-message-1'),
    resentEmailMessage2: t('resent-email-message-2'),
    backToDashboard: t('back-to-dashboard'),
    errorResendingEmail: t('error-resending-email'),
  };

  return (
    <>
      <Skeleton
        email={user?.email}
        userId={userId}
        subscriptionPlan={user?.subscribtionPlan}
        texts={texts}
      />
    </>
  );
}
