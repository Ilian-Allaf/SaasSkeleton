
'use client'
import React from 'react';
import { useSession} from 'next-auth/react'
import { useTranslation } from '@/i18n/client'
import { Button } from "@/components/ui/button"


export default function Skeleton() {
  const { data: session } = useSession();
  const { t } = useTranslation('dashboard')

  return (
    <div> 
      {session ? (
        <>
          <p>{t("reception.welcome")}, {session.user?.username }</p>          
        </>
      ) : (
        <p>You are not authenticated</p>
      )}
    </div>
  );
}
