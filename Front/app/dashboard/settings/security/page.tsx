import { useTranslation } from '@/i18n/index';
import SecurityForm from './securityForm';

export default async function Page() {
  const { t, i18n } = await useTranslation('settings');
  console.log(i18n.language);
  return (
    <div className="space-y-20">
      <div>
        <SecurityForm />
      </div>
    </div>
  );
}
