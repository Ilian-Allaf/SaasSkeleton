
'use client'

import React, { useState } from 'react';
import { useSession} from 'next-auth/react'
import { useTranslation } from '@/i18n/client'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { RegisterUserTeam } from '@/actions/teamActions/registerUserTeam';

export default function Skeleton() {
  const { t } = useTranslation('dashboard')
  const [teamName, setTeamName] = useState('');
  const handleCreateTeam = async () => {
    try {
      await RegisterUserTeam({ name: teamName });
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
