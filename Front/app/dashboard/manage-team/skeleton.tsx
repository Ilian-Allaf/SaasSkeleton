'use client'

import React, { useEffect, useState } from 'react';
import { useTranslation } from '@/i18n/client';
import { getUserTeamName } from '@/actions/teamActions/getUserTeamName';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';


export default function Skeleton() {
  const { t } = useTranslation('dashboard');
  const [teamName, setTeamName] = useState('');
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchTeamName = async () => {
      if (session?.user?.teamId) {
        const data = await getUserTeamName(session.user.teamId);
        setTeamName(data);
      }
    };
    fetchTeamName();
  }, [session?.user?.teamId]);

  return (
    <div>
      <p>Team name: {teamName}</p>
    </div>
  );
}

