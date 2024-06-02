// components/ProfileForm.js
import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, XCircleIcon, PencilIcon } from '@heroicons/react/outline';
import InputError from '@/components/InputError';
import { calculatePasswordProgress } from '@/utils/passwordCheck';
import ProgressBar from '@/components/ProgressBar';
import { UpdatePassword } from '@/actions/userActions/updatePassword';
import { useTranslation } from '@/i18n/client'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';


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
  const [passwordModalTitle, setPasswordModalTitle] = useState("")

  const [currentPassword, setCurrentPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)

  const [newPassword, setNewPassword] = useState("")
  const [confirmationPassword, setConfirmationPassword] = useState("")

  const [error, setError] = useState({ field: "", message: "" })

  const mfa = false;
  const [securityItems, setSecurityItems] = useState([
    { label: t("security.password"), value: '*********', updateSetting: () => { setPasswordModalTitle(t("security.update-password"));setIsPasswordModalOpen(true); } },
    { label: t("security.phone"), value: '-', updateSetting: () => {} },
    { label: t("security.2fa"), value: mfa ? <CheckCircleIcon className="h-5 w-5" />: <XCircleIcon className="h-5 w-5" />, buttonText: mfa ? 'disable': 'enable', updateSetting: () => {} },
  ]);
  
  //#region Current password functions
  const handleCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError({ field: '', message: '' });
    setCurrentPassword(event.target.value);
  }
  
  const handleToggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  }

  //#endregion

  //#region New password functions
  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError({ field: '', message: '' });
    setNewPassword(event.target.value);
  }
  
  //#endregion

  //#region Confirmation password functions
  const handleConfirmationPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError({ field: '', message: '' });
    setConfirmationPassword(event.target.value);
  }
  
  //#endregion
  
  //#region hooks
  useEffect(() => {
    if (!isPasswordModalOpen) {
      setCurrentPassword('');
      setNewPassword('');
      setConfirmationPassword('');
    }
  }, [isPasswordModalOpen]);
  //#endregion

  const {
    mutate: server_updatePassword,
    isPending: isUpdatingPassword,
  } = useMutation({
    mutationFn: async ({currentPassword, newPassword, confirmationPassword}: {currentPassword: string, newPassword: string, confirmationPassword: string}) => {await UpdatePassword({currentPassword, newPassword, confirmationPassword})},
    onSuccess: () => {
      setIsPasswordModalOpen(false);
      toast.success(t('security.successfully-updated-password'));
    },
    onError: (error: any) => {
      const errorObj = JSON.parse(error.message);
      if (errorObj.field === "currentPassword" || errorObj.field === "newPassword") {
        setError({message: errorObj.message, field: errorObj.field});
      }
      console.error(error);
    }
  });

  return (
    <>
      <Dialog open={isPasswordModalOpen} onOpenChange={() => {setIsPasswordModalOpen(false); setError({ message: '', field: '' });}}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{passwordModalTitle}</DialogTitle>
            <DialogDescription>{t('security.update-password-dialog-subtitle')}</DialogDescription>
          </DialogHeader>
          <div>
            <Input value={currentPassword} type='password' label={t("security.current-password")} error={error.field === 'currentPassword'} onChange={(event) => handleCurrentPasswordChange(event)} />
            {error.message && error.field === 'currentPassword' && (
              <InputError error={error.message} />
            )}
          </div>
          <Input value={newPassword} type='password' error={error.field === "newPassword"} label={t("security.new-password")} onChange={(event) => handleNewPasswordChange(event)} />
          {newPassword && <ProgressBar progress={calculatePasswordProgress(newPassword)} />}
          <div>
            <Input value={confirmationPassword} type='password' error={error.field === "newPassword"} label={t("security.confirm-password")} onChange={(event) => handleConfirmationPasswordChange(event)} />
            {error.message && error.field === 'newPassword' && (
              <InputError error={error.message} />
            )}
          </div>
          <DialogFooter>
            <Button onClick={() => {server_updatePassword({currentPassword, newPassword, confirmationPassword})}} loading={isUpdatingPassword}>{t("general.confirm")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <h3 className="text-lg font-medium">{t("security.security")}</h3>
      <Separator orientation='horizontal' className="col-start-1 col-end-4 mt-5 " />
        <div className="grid grid-rows gap-6 mt-6">
          {securityItems.map((item, index) => (
            <div key={index} className="grid grid-cols-3 items-center ">
              <span className="col-span-1 text-sm font-medium">{item.label}</span>
              <div className="col-span-1 text-left text-sm">{item.value}</div>
              <span className="col-span-1 flex justify-end cursor-pointer" onClick={() => item.updateSetting()}>
                <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
              </span>
              {index !== securityItems.length - 1 && (
                <Separator orientation='horizontal' className="col-start-1 col-end-4 mt-5" />
                // <Separator orientation='horizontal' className="col-start-1 col-end-4 mt-5 " />
              )}
            </div>
          ))}
        </div>
    </>
  );
};





export default Security;
