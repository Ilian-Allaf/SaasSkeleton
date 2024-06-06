import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/i18n/index';
import NotificationsForm from './notificationsForm';

export default async function Page() {
  const { t } = await useTranslation('settings');
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('notifications.title')}</h3>
      </div>
      <Separator />
      <NotificationsForm />
    </div>
  );
}
