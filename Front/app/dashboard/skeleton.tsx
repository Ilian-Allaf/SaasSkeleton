
'use client'
import React from 'react';
import { useSession} from 'next-auth/react'
import { useTranslation } from '@/i18n/client'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

export default function Skeleton() {
  const { data: session } = useSession();
  const { t } = useTranslation('dashboard')
  const router = useRouter();

  

  const teamRedirect = () => {
    if(session?.user?.teamId){
      router.push('dashboard/manage-team')
    }
    else {
      router.push('dashboard/create-team'); 
    }
  }

  return (
    <div> 
      {session ? (
        <>
          <p>{t("reception.welcome")}, {session.user?.username }</p>        
          <Button variant="default" size="default" onClick={teamRedirect}>
            {t("reception.createTeam")} 
          </Button>
        </>
      ) : (
        <p>You are not authenticated</p>
      )}
    </div>
  );
}
