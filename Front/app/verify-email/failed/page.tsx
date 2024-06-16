import InvalidLink from '@/components/InvalidLink';
import { useTranslation } from '@/i18n/index';
import '../../globals.css';

export default async function Page() {
  const { t } = await useTranslation('invalid-link');
  const texts = {
    InvalidLinkTitle: t('invalid-link-title'),
    invalidLinkMessage: t('invalid-link-message'),
    backToLogin: t('back-to-login'),
  };
  return <InvalidLink texts={texts} />;
}
