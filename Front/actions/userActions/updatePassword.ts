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
}): Promise<any> {
  const { t } = await useTranslation('settings');

  const session = await getServerSession(authOptions);
  if (!session) {
    return {
      error: {
        message: 'Not Authenticated',
        field: null,
      },
    };
  }

  const isPasswordCorrect = await CheckPassword(currentPassword);

  if (!isPasswordCorrect) {
    return {
      error: {
        message: t('security.incorrect-password'),
        field: 'currentPassword',
      },
    };
  }

  if (!isPasswordValid({ password: newPassword })) {
    return {
      error: {
        message: t('security.weak-password'),
        field: 'newPassword',
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user || (await bcrypt.compare(newPassword, user.password!))) {
    return {
      error: {
        field: 'newPassword',
        message: t('security.same-as-old-password'),
      },
    };
  }

  if (confirmationPassword !== newPassword) {
    return {
      error: {
        message: t('security.password-dont-match'),
        field: 'newPassword',
      },
    };
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
    return {
      error: {
        message: 'Internal Server Error',
        field: null,
      },
    };
  }
}
