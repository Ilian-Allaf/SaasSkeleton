// /app/actions/passwordReset.ts
'use server';

import { useTranslation } from '@/i18n/index';
import { prisma } from '@/lib/prismaClient';
import { isPasswordValid } from '@/utils/passwordCheck';
import { sendSuccessResetPasswordEmail } from '@/utils/sendEmail';
import bcrypt from 'bcrypt';

export async function ResetPassword({
  token,
  password,
}: {
  token: string;
  password: string;
}): Promise<any> {
  const { t } = await useTranslation('reset-password');
  // Find the password reset token
  const passwordResetToken = await prisma.passwordResetToken.findUnique({
    where: {
      token,
      createdAt: { gt: new Date(Date.now() - 1000 * 60 * 60 * 4) }, // 4h
      resetAt: null,
    },
  });

  if (!passwordResetToken) {
    return {
      error: {
        message:
          'Invalid token reset request. Please try resetting your password again.',
        field: null,
      },
    };
  }

  if (!isPasswordValid({ password })) {
    return {
      error: {
        field: 'confirmPassword',
        message: t('permissive-password-requirements'),
      },
    };
  }

  // Find the user associated with the token
  const user = await prisma.user.findUnique({
    where: {
      id: passwordResetToken.userId,
    },
  });

  if (!user || (await bcrypt.compare(password, user.password!))) {
    return {
      error: {
        field: 'password',
        message: t('same-as-old-password'),
      },
    };
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Update the user's password and mark the token as used
  const updateUser = prisma.user.update({
    where: { id: passwordResetToken.userId },
    data: {
      password: hashedPassword,
      active: true,
    },
  });

  const updateToken = prisma.passwordResetToken.update({
    where: {
      id: passwordResetToken.id,
    },
    data: {
      resetAt: new Date(),
    },
  });

  await prisma.$transaction([updateUser, updateToken]);
  await prisma.$disconnect();
  await sendSuccessResetPasswordEmail({ email: user.email });
}
