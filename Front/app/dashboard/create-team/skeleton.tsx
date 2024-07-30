
'use client'

import React, { useState, useEffect } from 'react';
import { useSession} from 'next-auth/react'
import { useTranslation } from '@/i18n/client'
import { Button } from "@/components/ui/button"
import { RegisterUserTeam } from '@/actions/teamActions/registerUserTeam';
import { useRouter } from 'next/navigation';

export default function Skeleton() {
  const { t } = useTranslation('dashboard')
  const [teamName, setTeamName] = useState('');
  const { data: session, update } = useSession();
  const router = useRouter();

  const handleCreateTeam = async () => {
    try {
      const teamId = await RegisterUserTeam({ name: teamName });
      update({ teamId: teamId })
      router.push('manage-team')
    } catch (error) {
      console.error('Failed to create team:', error);
    }
  };
  return (
    <div> 
      <>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Enter team name"
        />
        <Button variant="default" size="default" onClick={handleCreateTeam}>
          {t("reception.createTeam")}
        </Button>
      </>
    </div>
  );
}
