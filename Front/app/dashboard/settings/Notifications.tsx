// components/ProfileForm.js
import React, { useState } from 'react';
import { useSession} from 'next-auth/react'


function General() {
  return (
    <div className='space-y-20'>
      <div><ProfileFields /></div>
      <div><OtherFields /></div>
    </div>
  );
}


function ProfileFields() {
  const { data: session } = useSession();

  const [profileItems, setProfileItems] = useState([
    { label: 'Username', value: session?.user.username, action: () => {} },
    { label: 'Email', value: session?.user.email, action: () => {} },
  ]);

  return (
    <>
      <h1 className="text-m font-medium">Profile</h1>
      <p className="text-sm text-gray-600 mb-4">This information will be displayed publicly so be careful what you share.</p>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {profileItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-gray-700 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-gray-700 text-left text-sm">{item.value}</div>
            <span className="col-span-1 text-right text-indigo-700 font-semibold text-sm cursor-pointer hover:text-indigo-500" onClick={item.action}>update</span>
            {index !== profileItems.length - 1 && (
              <div className="col-start-1 col-end-4 border-t border-gray-200 mt-5" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function OtherFields() {
  const { data: session } = useSession();

  const [profileItems, setProfileItems] = useState([
    { label: 'Username', value: session?.user.username, action: () => {} },
    { label: 'Email', value: session?.user.email, action: () => {} },
  ]);

  return (
    <>
      <h1 className="text-m font-medium">Others</h1>
      <p className="text-sm text-gray-600 mb-4">This information will be displayed publicly so be careful what you share.</p>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {profileItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-gray-700 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-gray-700 text-left text-sm">{item.value}</div>
            <span className="col-span-1 text-right text-indigo-700 font-semibold text-sm cursor-pointer hover:text-indigo-500" onClick={item.action}>update</span>
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
