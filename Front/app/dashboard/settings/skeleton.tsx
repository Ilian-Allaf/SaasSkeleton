
'use client'
import React, { useState } from 'react';
import General from './General';
import Security from './Security';
import { useSearchParams } from 'next/navigation'
import Billing from './Billing';
import Notifications from './Notifications';

export interface SwitchLanguageProps {
  switchLanguage: boolean;
  setSwitchLanguage: (value: boolean) => void;
}

export default function Skeleton() {
  const searchParams = useSearchParams()
  const param = searchParams?.get('tab')
  const [switchLanguage, setSwitchLanguage] = useState(false)

  if (param === 'security') {
    return (
      <div className="grid grid-flow-col gap-7">
        <div className="col-span-4"><Security /></div>
      </div>
    );
  }
  else if (param === 'notifications') {
    return (
      <div className="grid grid-flow-col gap-7">
        <div className="col-span-4"><Notifications /></div>
      </div>
    );
  }
  else if (param === 'billing') {
    return (
      <div className="grid grid-flow-col gap-7">
        <div className="col-span-4"><Billing/></div>
      </div>
    );
  }
  else {
    return (
      <div className="grid grid-flow-col gap-7">
        <div className="col-span-4"><General switchLanguage={switchLanguage} setSwitchLanguage={setSwitchLanguage}/></div>
      </div>
    );
  }
}
