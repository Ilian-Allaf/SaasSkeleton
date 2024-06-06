'use client';

import { UpdateEmailRequest } from '@/actions/userActions/updateEmailRequest';
import { UpdateUsername } from '@/actions/userActions/updateUsername';
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
import { PencilIcon } from '@heroicons/react/outline';
import { MailIcon } from '@heroicons/react/solid';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function ProfileFields() {
  const { t } = useTranslation('settings');
  const { data: session, update } = useSession();
  const [error, setError] = useState({ message: '', field: '' });
  const [isUsernameModalOpen, setIsUsernameModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [
    successSubmittingEmailUpdateRequest,
    setSuccessSubmittingEmailUpdateRequest,
  ] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSubTitle, setModalSubTitle] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const items = [
    {
      label: t('general.username'),
      value: session?.user.username,
      updateSetting: () => {
        setModalTitle(t('general.update-username'));
        setModalSubTitle(t('general.update-username-dialog-subtitle'));
        setIsUsernameModalOpen(true);
      },
    },
    {
      label: t('general.email'),
      value: session?.user.email,
      updateSetting: () => {
        setModalTitle(t('general.update-email'));
        setModalSubTitle(t('general.update-email-dialog-subtitle'));
        setIsEmailModalOpen(true);
      },
    },
  ];

  //#region Hooks
  useEffect(() => {
    if (!isEmailModalOpen) {
      setEmail('');
      setPassword('');
      setSuccessSubmittingEmailUpdateRequest(false);
    }
  }, [isEmailModalOpen]);

  useEffect(() => {
    if (!isUsernameModalOpen) {
      setUsername('');
    }
  }, [isUsernameModalOpen]);

  //#endregion

  //#region Username functions
  const { mutate: server_updateUsername, isPending: isUpdatingUsername } =
    useMutation({
      mutationFn: async (username: string) => {
        await UpdateUsername(username);
      },
      onSuccess: () => {
        setIsUsernameModalOpen(false);
        update({ username: username });
        setUsername('');
        toast.success(t('general.successfully-updated-username'));
      },
      onError: (error: any) => {
        const errorObj = JSON.parse(error.message);
        if (errorObj.field === 'username') {
          setError({ message: errorObj.message, field: 'username' });
        }
        console.error(error);
      },
    });

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value.slice(0, 50);
    const isValidUsername = /^[a-zA-Z0-9]*$/.test(newUsername);
    if (isValidUsername) {
      setUsername(newUsername);
    }
    if (error.field === 'username') {
      setError({ message: '', field: '' });
    }
  };
  //#endregion

  //#region Update Email functions
  const {
    mutate: server_updateEmailRequest,
    isPending: isSubmitingEmailUpdateRequest,
  } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      await UpdateEmailRequest(email, password);
    },
    onSuccess: () => {
      setModalTitle('');
      setModalSubTitle('');
      setSuccessSubmittingEmailUpdateRequest(true);
    },
    onError: (error: any) => {
      setSuccessSubmittingEmailUpdateRequest(false);
      const errorObj = JSON.parse(error.message);
      if (errorObj.field === 'email' || errorObj.field === 'password') {
        console.error(errorObj);
        setError({ message: errorObj.message, field: errorObj.field });
      }
      console.error(error);
    },
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value.slice(0, 100);
    const isValidEmail = /^[^+]*$/.test(newEmail);
    if (isValidEmail) {
      setEmail(newEmail);
      if (error.field === 'email') {
        setError({ message: '', field: '' });
      }
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setError({ message: '', field: '' });
  };

  //#endregion

  return (
    <>
      {/* Username Modal*/}
      <Dialog
        open={isUsernameModalOpen}
        onOpenChange={() => {
          setIsUsernameModalOpen(false);
          setError({ message: '', field: '' });
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t('general.update-username')}</DialogTitle>
            <DialogDescription>{modalSubTitle}</DialogDescription>
          </DialogHeader>
          <div>
            <Input
              value={username}
              error={error.field === 'username'}
              label={t('general.username')}
              onChange={(event) => handleUsernameChange(event)}
            />
            {error.message && error.field === 'username' && (
              <InputError error={error.message} />
            )}
          </div>
          <DialogFooter>
            <Button
              onClick={() => server_updateUsername(username)}
              loading={isUpdatingUsername}
            >
              {t('general.update')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Email Modal*/}
      <Dialog
        open={isEmailModalOpen}
        onOpenChange={() => {
          setIsEmailModalOpen(false);
          setError({ message: '', field: '' });
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          {!successSubmittingEmailUpdateRequest ? (
            <>
              <DialogHeader>
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogDescription>{modalSubTitle}</DialogDescription>
              </DialogHeader>
              <div>
                <Input
                  value={email}
                  label={t('general.email')}
                  error={error.field === 'email'}
                  onChange={(event) => handleEmailChange(event)}
                />
                {error.message && error.field === 'email' && (
                  <InputError error={error.message} />
                )}
              </div>
              <div>
                <Input
                  value={password}
                  type="password"
                  error={error.field === 'password'}
                  label={t('general.password')}
                  onChange={(event) => handlePasswordChange(event)}
                />
                {error.message && error.field === 'password' && (
                  <InputError error={error.message} />
                )}
              </div>
              <DialogFooter>
                <Button
                  onClick={() => {
                    server_updateEmailRequest({ email, password });
                  }}
                  loading={isSubmitingEmailUpdateRequest}
                >
                  {t('general.confirm')}
                </Button>
              </DialogFooter>
            </>
          ) : (
            <div className="mt-6">
              <div className="flex flex-col items-center justify-center">
                <MailIcon className="h-10 w-10" />
                <p className="text-center">{t('general.check-email')}</p>
                <p className="text-center font-bold mt-3">{email}</p>
              </div>
              <div className="flex justify-center space-x-4 mt-6"></div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <h3 className="text-lg font-medium">{t('general.profile-title')}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {t('general.profile-subtitle')}
      </p>
      <Separator
        orientation="horizontal"
        className="col-start-1 col-end-4 mt-5 "
      />
      <div className="grid grid-rows gap-6 mt-6">
        {items.map((item, index) => (
          <div key={index} className="grid grid-cols-3 items-center ">
            <span className="col-span-1 text-sm font-medium">
              {item.label?.toString()}
            </span>
            <div className="col-span-1 text-left text-sm">
              {item.value?.toString()}
            </div>
            <span
              className="col-span-1 flex justify-end cursor-pointer"
              onClick={() => item.updateSetting()}
            >
              <PencilIcon className="h-5 w-5 hover:text-indigo-700" />
            </span>
            {index !== items.length - 1 && (
              <Separator
                orientation="horizontal"
                className="col-start-1 col-end-4 mt-5 "
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
