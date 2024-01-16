// components/ProfileForm.js
import React, { useState, useTransition } from 'react';
import { useSession} from 'next-auth/react'
import MultiSelector from "@/components/MultiSelector"
import { PencilAltIcon } from '@heroicons/react/outline';
import Modal from '@/components/Modal';
import InputField from '@/components/InputField';
import { UpdateUsername } from './actions';
import InputError from '@/components/InputError';


function General() {
  return (
    <div className='space-y-20'>
      <div><ProfileFields /></div>
      <div><OthersFields /></div>
    </div>
  );
}


function ProfileFields() {
  const { data: session } = useSession();
  let [isPending, startTransition] = useTransition();
  const [error, setError] = useState({ message: '', field: '' });
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newUsername, setNewUsername] = useState('');

  const [profileItems, setProfileItems] = useState([
    { label: 'Username', value: session?.user.username },
    { label: 'Email', value: session?.user.email },
  ]);


  const handleApplyNewUsername = async () => {
    try {
      const result = await UpdateUsername(newUsername);
      if (result?.error) {
        setError({message: result.error, field: 'username'});
        console.log(result.error);
        return;
      }
      setIsModalOpen(false);
      const newProfileItems = [...profileItems];
      newProfileItems[0].value = newUsername;
      setProfileItems(newProfileItems);
      setNewUsername('')
    }
    catch (e) {
      console.log(e);
    }
  }

  const handlUsernameChange = async (event) => {
    setNewUsername(event.target.value);
    if (error.field === 'username') {
      setError({ message: '', field: '' });
    }
  }


  return (
    <>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title='Update Username'>
        <div className="mt-6">

          <InputField value={newUsername} height={0} label='Username' onChange={(event) => handlUsernameChange(event) }/>
          {error.message && error.field === 'username' && (
            <InputError error={error.message}/>
          )}
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() =>  startTransition(() => handleApplyNewUsername())}
          >
            Apply
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => {setIsModalOpen(false); setNewUsername('')}}
          >
            Cancel
          </button>
        </div>
      </Modal>
      <h1 className="text-m font-medium">Profile</h1>
      <p className="text-sm text-gray-600 mb-4">This information will be displayed publicly so be careful what you share.</p>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {profileItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-gray-700 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-gray-700 text-left text-sm">{item.value}</div>
            <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <PencilAltIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== profileItems.length - 1 && (
              <div className="col-start-1 col-end-4 border-t border-gray-200 mt-5" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function OthersFields() {
  const { data: session } = useSession();
  const currencyOptions = [
    { value: 'USD', label: 'Dollar' },
    { value: 'EUR', label: 'Euro' },
  ]

  const languageOptions = [
    { value: 'Français', label: 'FR' },
    { value: 'English', label: 'EN' },
    { value: 'Español', label: 'ES'},

  ]
  
  const [profileItems, setOthersItems] = useState([
    { label: 'Language', value: <MultiSelector options={languageOptions} defaultValue='FR'/>, action: () => {} },
    { label: 'Currency', value: <MultiSelector options={currencyOptions} defaultValue='EUR'/>, action: () => {} },
  ]);

  return (
    <>
      <h1 className="text-m font-medium mb-4">Others</h1>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {profileItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-gray-700 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-gray-700 flex justify-center items-center">
              {item.value}
            </div>
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
