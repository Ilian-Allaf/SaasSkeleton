import { authOptions } from '@/auth/[...nextauth]';
import { useTranslation } from '@/i18n/index';
import { getServerSession } from 'next-auth';
import Skeleton from './skeleton';

export default async function Page() {
  const { t } = await useTranslation('email-sent');
  const session = await getServerSession(authOptions);

  const texts = {
    checkEmail: t('check-email'),
    resendEmail: t('resend-email'),
    sentEmailMessage1: t('sent-email-message-1'),
    sentEmailMessage2: t('sent-email-message-2'),
    resentEmailMessage1: t('resent-email-message-1'),
    resentEmailMessage2: t('resent-email-message-2'),
    backToLogin: t('back-to-login'),
    errorResendingEmail: t('error-resending-email'),
    continue: t('continue'),
    email: t('email'),
  };
  return (
    <Skeleton texts={texts} email={session?.user.email || t('your-email')} />
  );
}
