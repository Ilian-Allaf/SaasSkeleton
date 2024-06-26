'use client';

import { UpdatePassword } from '@/actions/userActions/updatePassword';
import InputError from '@/components/InputError';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from '@/i18n/client';
import useServerAction from '@/utils/customHook/useServerAction';
import { PencilIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function SecurityForm() {
  const { t } = useTranslation('settings');

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordDialogTitle, setPasswordDialogTitle] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [error, setError] = useState({ field: '', message: '' });

  const mfa = false;
  const [securityItems] = useState([
    {
      label: t('security.password'),
      value: '*********',
      updateSetting: () => {
        setPasswordDialogTitle(t('security.update-password'));
        setIsPasswordModalOpen(true);
      },
    },
    // { label: t('security.phone'), value: '-', updateSetting: () => {} },
    // {
    //   label: t('security.2fa'),
    //   value: mfa ? (
    //     <CheckCircleIcon className="h-5 w-5" />
    //   ) : (
    //     <XCircleIcon className="h-5 w-5" />
    //   ),
    //   buttonText: mfa ? 'disable' : 'enable',
    //   updateSetting: () => {},
    // },
  ]);

  //#region Current password functions
  const handleCurrentPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError({ field: '', message: '' });
    setCurrentPassword(event.target.value);
  };

  //#endregion

  //#region New password functions
  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError({ field: '', message: '' });
    setNewPassword(event.target.value);
  };

  //#endregion

  //#region Confirmation password functions
  const handleConfirmationPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError({ field: '', message: '' });
    setConfirmationPassword(event.target.value);
  };

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

  const { callableName: server_updatePassword, isPending: isUpdatingPassword } =
    useServerAction({
      action: ({
        currentPassword,
        newPassword,
        confirmationPassword,
      }: {
        currentPassword: string;
        newPassword: string;
        confirmationPassword: string;
      }) =>
        UpdatePassword({
          currentPassword,
          newPassword,
          confirmationPassword,
        }),
      onSuccess: () => {
        setIsPasswordModalOpen(false);
        toast.success(t('security.successfully-updated-password'));
      },
      onError: (error: any) => {
        if (
          error.field === 'currentPassword' ||
          error.field === 'newPassword'
        ) {
          setError({ message: error.message, field: error.field });
        }
        console.error(error);
      },
    });

  return (
    <>
      <Dialog
        open={isPasswordModalOpen}
        onOpenChange={() => {
          setIsPasswordModalOpen(false);
          setError({ message: '', field: '' });
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{passwordDialogTitle}</DialogTitle>
            <DialogDescription>
              {t('security.update-password-dialog-subtitle')}
            </DialogDescription>
          </DialogHeader>
          <div>
            <Input
              value={currentPassword}
              type="password"
              label={t('security.current-password')}
              error={error.field === 'currentPassword'}
              onChange={(event) => handleCurrentPasswordChange(event)}
            />
            {error.message && error.field === 'currentPassword' && (
              <InputError error={error.message} />
            )}
          </div>
          <Input
            value={newPassword}
            type="password"
            error={error.field === 'newPassword'}
            label={t('security.new-password')}
            onChange={(event) => handleNewPasswordChange(event)}
          />
          <div>
            <Input
              value={confirmationPassword}
              type="password"
              error={error.field === 'newPassword'}
              label={t('security.confirm-password')}
              onChange={(event) => handleConfirmationPasswordChange(event)}
            />
            {error.message && error.field === 'newPassword' && (
              <InputError error={error.message} />
            )}
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                server_updatePassword({
                  currentPassword,
                  newPassword,
                  confirmationPassword,
                });
              }}
              loading={isUpdatingPassword}
            >
              {t('general.confirm')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <h3 className="text-lg font-medium">{t('security.title')}</h3>
      <Separator
        orientation="horizontal"
        className="col-start-1 col-end-4 mt-5 "
      />
      <div className="grid grid-rows gap-6 mt-6">
        {securityItems.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-sm font-medium">{item.label}</span>
            <div className="col-span-1 text-left text-sm">{item.value}</div>
            <span
              className="col-span-1 flex justify-end cursor-pointer"
              onClick={() => item.updateSetting()}
            >
              <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== securityItems.length - 1 && (
              <Separator
                orientation="horizontal"
                className="col-start-1 col-end-4 mt-5"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
