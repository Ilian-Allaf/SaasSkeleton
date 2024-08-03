'use client';

import { getUserTeamName } from '@/actions/teamActions/getUserTeamName';
import { SendTeamInvitationEmail } from '@/actions/teamActions/invitePlayer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useTranslation } from '@/i18n/client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Skeleton() {
  const { t } = useTranslation('dashboard');
  const [teamName, setTeamName] = useState('');
  const { data: session } = useSession();
  const router = useRouter();
  const [isInviteSheetOpen, setIsInviteSheetOpen] = useState(false);
  const [email, setEmail] = useState('');

  const userId = session?.user.id;
  useEffect(() => {
    const fetchTeamName = async () => {
      if (session?.user?.teamId) {
        const data = await getUserTeamName(session.user.teamId);
        setTeamName(data);
      }
    };
    fetchTeamName();
  }, [session?.user?.teamId]);

  const handleInviteClick = () => {
    setIsInviteSheetOpen(true);
  };

  const handleInviteClose = () => {
    setIsInviteSheetOpen(false);
    setEmail('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInvite = () => {
    SendTeamInvitationEmail({ email });
    handleInviteClose();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t('Team Management')}</h1>
      <p className="mb-4">
        {t('Team Name')}: {teamName}
      </p>
      <Button onClick={handleInviteClick}>{t('Invite a player')}</Button>

      <Sheet open={isInviteSheetOpen} onOpenChange={setIsInviteSheetOpen}>
        <SheetContent side="right">
          <SheetHeader className="pl-4">
            <SheetTitle>{t('Invite a new member')}</SheetTitle>
          </SheetHeader>
          <div className="p-4">
            <div className="flex flex-col items-center">
              <Input
                type="email"
                placeholder={t('Enter email address')}
                value={email}
                onChange={handleEmailChange}
                className="mb-4 w-full"
              />
              <Button onClick={handleInvite} className="w-full mb-4">
                {t('Send Invite')}
              </Button>
              <Image
                src="/sidepanel.png"
                alt="TeamUp"
                width={400}
                height={400}
                className="mt-4 w-full"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
