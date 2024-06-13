'use server';

import { useTranslation } from '@/i18n/index';
import { prisma } from '@/lib/prismaClient';
import { sendResetPasswordEmail } from '@/utils/sendEmail';
import validator from 'validator';

export async function ForgotPassword({
  email,
}: {
  email: string;
}): Promise<any> {
  const { t } = await useTranslation('forgot-password');

  if (!validator.isEmail(email)) {
    return {
      error: {
        message: t('invalid-email'),
        field: 'email',
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return {
      error: {
        message: t('email-not-registered'),
        field: 'email',
      },
    };
  }
  await sendResetPasswordEmail({ email: email, userId: user.id });
  await prisma.$disconnect();

  return { email };
}
