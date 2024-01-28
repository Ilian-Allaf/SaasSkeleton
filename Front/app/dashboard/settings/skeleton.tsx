
'use client'
import React from 'react';
import { useSession} from 'next-auth/react'
import SideBar from './SideBar';
import General from './General';
import Security from './Security';
import { useSearchParams } from 'next/navigation'
import Billing from './Billing';
import Notifications from './Notifications';


export default function Skeleton() {
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
          <div className="col-span-4"><Notifications /></div>
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
          <div className="col-span-4"><General /></div>
      </div>
    );
  }
}
