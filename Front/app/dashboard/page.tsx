import React from 'react'
import Skeleton from './skeleton'
import { auth } from "auth";
import { SessionProvider } from 'next-auth/react';

export default async function page() {
  const session = await auth();
  console.log(session)
  return (
    <SessionProvider session={session}>
    <Skeleton/>
    </SessionProvider>
  )
}