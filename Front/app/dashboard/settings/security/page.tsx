import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/i18n/index';
import SecurityForm from './securityForm';

export default async function Page() {
  const { t } = await useTranslation('settings');
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('security.title')}</h3>
      </div>
      <Separator />
      <SecurityForm />
    </div>
  );
}
