
'use client'
import React from 'react';
import { useSession} from 'next-auth/react'
import SideBar from './SideBar';
import ProfileForm from './General';
import Security from './Security';
import { useSearchParams } from 'next/navigation'
import Billing from './Billing';


export default function Skeleton({last4digits:string}) {
  const { data: session } = useSession();
  const searchParams = useSearchParams()
  const param = searchParams?.get('tab')

  if (param === 'security') {
    return (
      <div className="grid grid-flow-col gap-7">
          <div className="col-span-1"><SideBar /></div>
          <div className="col-span-4"><Security /></div>
      </div>
    );
  }
  else if (param === 'notifications') {
    return (
      <div className="grid grid-flow-col gap-7">
          <div className="col-span-1"><SideBar /></div>
          <div className="col-span-4"><ProfileForm /></div>
      </div>
    );
  }
  else if (param === 'billing') {
    return (
      <div className="grid grid-flow-col gap-7">
          <div className="col-span-1"><SideBar /></div>
          <div className="col-span-4"><Billing/></div>
      </div>
    );
  }
  else {
    return (
      <div className="grid grid-flow-col gap-7">
          <div className="col-span-1"><SideBar /></div>
          <div className="col-span-4"><ProfileForm /></div>
      </div>
    );
  }
}
