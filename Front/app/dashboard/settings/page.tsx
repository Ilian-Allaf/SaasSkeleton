import { useTranslation } from '@/i18n/index';
import OthersForm from './components/othersForm';
import ProfilForm from './components/profilForm';

export default async function Page() {
  const { t } = await useTranslation('settings');
  return (
    <div className="space-y-20">
      <div>
        <ProfilForm />
      </div>
      <div>
        <OthersForm />
      </div>
    </div>
  );
}
