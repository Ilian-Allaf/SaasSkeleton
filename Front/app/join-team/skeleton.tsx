'use client';

import { addPlayer } from '@/actions/teamActions/addPlayer';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import '../globals.css';

export default function Skeleton() {
  const { data: session, update } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const teamId = searchParams?.get('teamId');
  useEffect(() => {
    const teamId = searchParams?.get('teamId');
    if (teamId) {
      addPlayer({ teamId });
    }
  }, [searchParams, update, router]);
  update({ teamId: teamId });
  router.push('/dashboard');

  return <></>;
}
