// components/ProfileForm.js
import React, { useEffect, useState } from 'react';
import { useSession} from 'next-auth/react'
import { CheckCircleIcon, PencilAltIcon, XCircleIcon } from '@heroicons/react/outline';
import Modal from '@/components/Modal';
import InputField from '@/components/InputField';
import InputError from '@/components/InputError';
import { isPasswordValid } from '@/utils/passwordCheck';


function Security() {
  return (
    <div className='space-y-20'>
      <div><SecurityFields /></div>
    </div>
  );
}


function SecurityFields() {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [updateTab, setUpdateTab] = useState(0);

  const [currentPassword, setCurrentPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)

  const [newPassword, setNewPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)

  const [confirmationPassword, setConfirmationPassword] = useState("")
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false)

  const [error, setError] = useState({ field: "", message: "" })

  const mfa = false;
  const [securityItems, setSecurityItems] = useState([
    { label: 'Password', value: '*********', updateSetting: () => { setIsPasswordModalOpen(true); } },
    { label: 'Phone number', value: '06.22.23.46.15', updateSetting: () => {} },
    { label: '2-step verification', value: mfa ? <CheckCircleIcon className="h-5 w-5" />: <XCircleIcon className="h-5 w-5" />, buttonText: mfa ? 'disable': 'enable', updateSetting: () => {} },
  ]);
  
  //#region Current password functions
  const handleCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target.value);
  }
  
  const handleToggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  }

  //#endregion

  //#region New password functions
  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  }
  
  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  }
  //#endregion

  //#region Confirmation password functions
  const handleConfirmationPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  }
  
  const handleToggleConfirmationPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  }
  //#endregion
  
  //#region hooks
  useEffect(() => {
    if (!isPasswordModalOpen) {
      setCurrentPassword('');
      setCurrentPassword('')
    }
  }, [isPasswordModalOpen]);
  //#endregion

  const handleCurrentPasswordSubmission = () => {
    if (newPassword === "") {
      setError({ field: "password", message: "Please enter your password" });
      return;
    }
    if (newPassword === "") {
      setError({ field: "password", message: "Please enter a new password" });
      return;
    }
    if (!isPasswordValid(newPassword)) {
      setError({ field: "password", message: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character" });
      return;
    }
    setError({ field: "", message: "" });
  }

  const handleNewPasswordSubmission = () => {
    if (newPassword === "") {
      setError({ field: "password", message: "Please enter your password" });
      return;
    }
    if (newPassword === "") {
      setError({ field: "password", message: "Please enter a new password" });
      return;
    }
    if (!isPasswordValid(newPassword)) {
      setError({ field: "password", message: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character" });
      return;
    }
    setError({ field: "", message: "" });
  }

  return (
    <>
      {/* Password Modal*/}
      <Modal isOpen={isPasswordModalOpen} setIsOpen={setIsPasswordModalOpen} title='Update Password'>
      {updateTab === 0 && 
        <div className="mt-6">
          <InputField 
          value={currentPassword} 
          height={0} 
          isPassword={true} 
          error={error.field === "password"} 
          disableText={true} 
          onTogglePasswordVisibility={handleToggleCurrentPasswordVisibility} 
          passwordVisible={showCurrentPassword} 
          label='Current password' 
          onChange={(event) => handleCurrentPasswordChange(event) }/>
          {error.message && error.field === 'password' && (
            <InputError error={error.message}/>
          )}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() =>  handleCurrentPasswordSubmission()}
            >
              Apply
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => {setIsPasswordModalOpen(false);}}
            >
              Cancel
            </button>
          </div>
        </div>
      }

      {updateTab === 1 && 
        <div className="mt-6">
          <InputField 
          value={newPassword} 
          height={0} 
          isPassword={true} 
          error={error.field === "password"} 
          disableText={true} 
          onTogglePasswordVisibility={handleToggleNewPasswordVisibility} 
          passwordVisible={showNewPassword} 
          label='New password' 
          onChange={(event) => handleNewPasswordChange(event) }/>
          {error.message && error.field === 'password' && (
            <InputError error={error.message}/>
          )}

          <InputField 
          value={confirmationPassword} 
          height={0} 
          isPassword={true} 
          error={error.field === "password"} 
          disableText={true} 
          onTogglePasswordVisibility={handleToggleConfirmationPasswordVisibility} 
          passwordVisible={showConfirmationPassword} 
          label='New password' 
          onChange={(event) => handleConfirmationPasswordChange(event) }/>
          {error.message && error.field === 'password' && (
            <InputError error={error.message}/>
          )}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() =>  handleNewPasswordSubmission()}
            >
              Apply
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => {setIsPasswordModalOpen(false);}}
            >
              Cancel
            </button>
          </div>
        </div>
      }
      </Modal>
      <h1 className="text-m font-medium mb-4">Security</h1>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {securityItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-gray-700 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-gray-700 text-left text-sm">{item.value}</div>
            <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => item.updateSetting()}>
              <PencilAltIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== securityItems.length - 1 && (
              <div className="col-start-1 col-end-4 border-t border-gray-200 mt-5" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}





export default Security;
