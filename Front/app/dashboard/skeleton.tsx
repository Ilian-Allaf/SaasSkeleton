'use client';
import { LinkValorantPlayerId } from '@/actions/riotApiActions/linkValorantPlayerId';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import MatchScoreCard from './matchScoreCard';

export default function Skeleton() {
  const { data: session } = useSession();
  const { t } = useTranslation('dashboard');
  const router = useRouter();

  const teamRedirect = () => {
    if (session?.user?.teamId) {
      router.push('dashboard/manage-team');
    } else {
      router.push('dashboard/create-team');
    }
  };

  return (
    <div className="flex flex-col mb-8 space-y-6">
      <Button variant="default" size="default" onClick={teamRedirect}>
        {t('reception.createTeam')}
      </Button>
      <Button
        variant="default"
        size="default"
        onClick={() =>
          LinkValorantPlayerId({ username: 'Farouk', tag: '1849' })
        }
      >
        Link Valorant Account
      </Button>
      <MatchScoreCard />
    </div>
  );
}
