// components/ProfileForm.js
import React, { useState } from 'react';
import { useSession} from 'next-auth/react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';


function General() {
  return (
    <div className='space-y-20'>
      <div><SecurityFields /></div>
    </div>
  );
}


function SecurityFields() {
  const { data: session } = useSession();
  const mfa = false;
  const [profileItems, setProfileItems] = useState([
    { label: 'Password', value: '*********', buttonText: 'update', action: () => {} },
    { label: 'Phone number', value: '06.22.23.46.15', buttonText: 'update', action: () => {} },
    { label: '2-step verification', value: mfa ? <CheckCircleIcon className="h-5 w-5" />: <XCircleIcon className="h-5 w-5" />, buttonText: mfa ? 'disable': 'enable', action: () => {} },
  ]);

  return (
    <>
      <h1 className="text-m font-medium mb-4">Security</h1>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {profileItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-gray-700 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-gray-700 text-left text-sm">{item.value}</div>
            <span className="col-span-1 text-right text-indigo-700 font-semibold text-sm cursor-pointer hover:text-indigo-500" onClick={item.action}>{item.buttonText}</span>
            {index !== profileItems.length - 1 && (
              <div className="col-start-1 col-end-4 border-t border-gray-200 mt-5" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}





export default General;
