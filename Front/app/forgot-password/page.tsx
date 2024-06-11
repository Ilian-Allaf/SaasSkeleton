import { useTranslation } from '@/i18n/index';
import Skeleton from './skeleton';

export default async function Page() {
  const { t } = await useTranslation('forgot-password');

  const texts = {
    checkEmail: t('check-email'),
    resendEmail: t('resend-email'),
    sentEmailMessage1: t('sent-email-message-1'),
    sentEmailMessage2: t('sent-email-message-2'),
    resentEmailMessage1: t('resent-email-message-1'),
    resentEmailMessage2: t('resent-email-message-2'),
    backToLogin: t('back-to-login'),
    errorResendingEmail: t('error-resending-email'),
    errorEmailNotRegistered: t('email-not-registered'),
    resetPassword: t('reset-password'),
    email: t('email'),
    continue: t('continue'),
  };
  return <Skeleton texts={texts} />;
}
