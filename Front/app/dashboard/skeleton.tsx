
'use client'
import React from 'react';
import { useSession} from 'next-auth/react'

export default function Skeleton() {
  const { data: session } = useSession();
  return (
    <div> 
      {session ? (
        <>
          <p>Welcome, {session.user?.username || session.user?.email}</p>
        </>
      ) : (
        <p>You are not authenticated</p>
      )}
    </div>
  );
}
