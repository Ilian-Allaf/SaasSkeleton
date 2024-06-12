import { useTranslation } from '@/i18n/index';
import SecurityForm from './securityForm';

export default async function Page() {
  const { t } = await useTranslation('settings');
  return (
    <div className="space-y-20">
      <div>
        <SecurityForm />
      </div>
    </div>
  );
}
