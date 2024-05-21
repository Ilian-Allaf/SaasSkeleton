import React from 'react'
import Skeleton from './skeleton'
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { FingerPrintIcon, UserCircleIcon, BellIcon, CreditCardIcon } from '@heroicons/react/outline';
import SideBar from './SideBar'



export default async function page() {
  const session = await getServerSession(authOptions)
  if(!session){
    return {
        error: 'Not Authenticated',
    };
  };

  const items = [
    { icon: <UserCircleIcon className="h-5 w-5" />, label: 'general'},
    { icon: <FingerPrintIcon className="h-5 w-5" />, label: 'security' },
    { icon: <BellIcon className="h-5 w-5" />, label: 'notifications' }
  ]
  if (session.user.subscriptionPlan) {
    items.push({ icon: <CreditCardIcon className="h-5 w-5" />, label: 'billing' })
  }

  return (
    <div className="grid grid-flow-col gap-7">
      <div className="col-span-1"><SideBar items={items}/></div>
      <div className="col-span-4"><Skeleton/></div>
    </div>

  )
}