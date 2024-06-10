'use server';

import { authOptions } from '@/auth/[...nextauth]';
import { useTranslation } from '@/i18n/index';
import { prisma } from '@/lib/prismaClient';
import { isPasswordValid } from '@/utils/passwordCheck';
import bcrypt from 'bcrypt';
import { getServerSession } from 'next-auth';
import { CheckPassword } from './checkPassword';

export async function UpdatePassword({
  currentPassword,
  newPassword,
  confirmationPassword,
}: {
  currentPassword: string;
  newPassword: string;
  confirmationPassword: string;
}): Promise<void> {
  const { t } = await useTranslation('settings');

  const session = await getServerSession(authOptions);
  if (!session) {
    console.error('Not Authenticated');
    const obj = {
      message: 'Not Authenticated',
    };
    throw Error(JSON.stringify(obj));
  }

  let isPasswordMatching: Boolean;
  try {
    isPasswordMatching = await CheckPassword(currentPassword);
  } catch (error) {
    const obj = {
      message: 'Internal Server Error',
    };
    throw Error(JSON.stringify(obj));
  }

  if (!isPasswordMatching) {
    const obj = {
      message: t('security.incorrect-password'),
      field: 'currentPassword',
    };
    throw Error(JSON.stringify(obj));
  }

  if (!isPasswordValid({ password: newPassword })) {
    const obj = {
      message: t('security.invalid-password'),
      field: 'newPassword',
    };
    throw Error(JSON.stringify(obj));
  }

  if (confirmationPassword !== newPassword) {
    const obj = {
      message: t('security.password-dont-match'),
      field: 'newPassword',
    };
    throw Error(JSON.stringify(obj));
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const updatedUser = await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  if (!updatedUser) {
    console.error('Error updating user password');
    const obj = {
      message: 'Internal Server Error',
    };
    throw Error(JSON.stringify(obj));
  }
}
