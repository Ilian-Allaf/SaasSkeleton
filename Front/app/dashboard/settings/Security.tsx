// components/ProfileForm.js
import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, PencilIcon, XCircleIcon } from '@heroicons/react/outline';
import Modal from '@/components/Modal';
import InputField from '@/components/InputField';
import InputError from '@/components/InputError';
import { calculatePasswordProgress } from '@/utils/passwordCheck';
import ProgressBar from '@/components/ProgressBar';
import { CheckPassword } from '@/actions/userActions/checkPassword';
import { SubmitPasswordUpdateRequest } from '@/actions/userActions/submitPasswordUpdateRequest';
import { useTranslation } from '@/i18n/client'
import Button from '@/components/Button';


function Security() {
  return (
    <div className='space-y-20'>
      <div><SecurityFields /></div>
    </div>
  );
}


function SecurityFields() {
  const { t } = useTranslation('settings')

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [updateTab, setUpdateTab] = useState(0);
  const [passwordModalTitle, setPasswordModalTitle] = useState("")

  const [currentPassword, setCurrentPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)

  const [newPassword, setNewPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)

  const [confirmationPassword, setConfirmationPassword] = useState("")
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false)

  const [error, setError] = useState({ field: "", message: "" })

  const mfa = false;
  const [securityItems, setSecurityItems] = useState([
    { label: t("security.password"), value: '*********', updateSetting: () => { setPasswordModalTitle(t("security.update-password"));setIsPasswordModalOpen(true); } },
    { label: t("security.phone"), value: '-', updateSetting: () => {} },
    { label: t("security.2fa"), value: mfa ? <CheckCircleIcon className="h-5 w-5" />: <XCircleIcon className="h-5 w-5" />, buttonText: mfa ? 'disable': 'enable', updateSetting: () => {} },
  ]);
  
  //#region Current password functions
  const handleCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError({ field: "", message: "" });
    setCurrentPassword(event.target.value);
  }
  
  const handleToggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  }

  //#endregion

  //#region New password functions
  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError({ field: "", message: "" });
    setNewPassword(event.target.value);
  }
  
  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  }
  //#endregion

  //#region Confirmation password functions
  const handleConfirmationPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError({ field: "", message: "" });
    setConfirmationPassword(event.target.value);
  }
  
  const handleToggleConfirmationPasswordVisibility = () => {
    setShowConfirmationPassword(!showConfirmationPassword);
  }
  //#endregion
  
  //#region hooks
  useEffect(() => {
    if (!isPasswordModalOpen) {
      setCurrentPassword('');
      setNewPassword('');
      setConfirmationPassword('');
      //wait for modal to close before resetting the tab
      setTimeout(() => {
        setUpdateTab(0);
      }, 50);
    }
  }, [isPasswordModalOpen]);
  //#endregion

  const handleCurrentPasswordSubmission = async () => {
    const isPasswordMatching = await CheckPassword(currentPassword);
    if (isPasswordMatching?.error) {
      setError({ field: "currentPassword", message: isPasswordMatching.error });
      return{
          error: t("security.incorrect-password"),
          field: "password",
      };
    }
    setUpdateTab(1);
  }

  const handleNewPasswordSubmission = async() => {
    if(newPassword !== confirmationPassword) {
      setError({ field: "newPassword", message: t("security.password-dont-match") });
      return;
    }
    const res = await SubmitPasswordUpdateRequest(currentPassword, newPassword);
    if (res?.error) {
      if (res.field == "newPassword" || res.field === "currentPassword") { setError({message: res.error, field: res.field}); }
      return;
    }
    setPasswordModalTitle("")
    setUpdateTab(2);
  }

  return (
    <>
      {/* Password Modal*/}
      <Modal isOpen={isPasswordModalOpen} setIsOpen={setIsPasswordModalOpen} title={passwordModalTitle}>
      {updateTab === 0 && 
        <div className="mt-6">
          <InputField 
          value={currentPassword} 
          height={1} 
          isPassword={true} 
          error={error.field === "currentPassword"} 
          disableText={true} 
          onTogglePasswordVisibility={handleToggleCurrentPasswordVisibility} 
          passwordVisible={showCurrentPassword} 
          label={t("security.current-password")} 
          onChange={(event) => handleCurrentPasswordChange(event) }/>
          {error.message && error.field === 'currentPassword' && (
            <InputError error={error.message}/>
          )}
          <div className="flex justify-center space-x-4 mt-6">
            <Button label={t("security.continue")} onClick={() => handleCurrentPasswordSubmission()}/>
            <Button label={t("security.cancel")} onClick={() => setIsPasswordModalOpen(false)}/>
          </div>
        </div>
      }

      {updateTab === 1 && 
        <div className="mt-6">
          <InputField 
          value={newPassword} 
          height={1} 
          isPassword={true} 
          error={error.field === "newPassword"} 
          // disableText={true} 
          onTogglePasswordVisibility={handleToggleNewPasswordVisibility} 
          passwordVisible={showNewPassword} 
          label={t("security.new-password")}
          onChange={(event) => handleNewPasswordChange(event) }/>

          {newPassword && <ProgressBar progress={calculatePasswordProgress(newPassword)} />}
          
          <InputField 
          value={confirmationPassword} 
          height={1} 
          isPassword={true} 
          error={error.field === "newPassword"} 
          disableText={true} 
          onTogglePasswordVisibility={handleToggleConfirmationPasswordVisibility} 
          passwordVisible={showConfirmationPassword} 
          label={t("security.confirm-password")}
          onChange={(event) => handleConfirmationPasswordChange(event) }/>
          {error.message && error.field === 'newPassword' && (
            <InputError error={error.message}/>
          )}
          <div className="flex justify-center space-x-4 mt-6">
            <Button label={t("security.update")} onClick={() => handleNewPasswordSubmission()}/>
            <Button label={t("security.cancel")} onClick={() => setIsPasswordModalOpen(false)}/>
          </div>
        </div>
      }

      {updateTab === 2 && 
        <div className="mt-6">
          <div className="flex flex-col items-center justify-center">
            <CheckCircleIcon className="mx-auto h-10 w-10 text-green-500" />
            <p className="text-center">{t("security.success")}</p>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <Button label={t("security.close")} onClick={() =>  setIsPasswordModalOpen(false)}/>
          </div>
        </div>
        }
      </Modal>
      <h1 className="text-m font-medium mb-4">{t("security.security")}</h1>
      <div className="border-t border-gray-300" />
      <div className="grid grid-rows gap-6 mt-6">
        {securityItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-left text-sm">{item.value}</div>
            <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => item.updateSetting()}>
              <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== securityItems.length - 1 && (
              <div className="col-start-1 col-end-4 border-t border-gray-200 mt-5" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};





export default Security;
