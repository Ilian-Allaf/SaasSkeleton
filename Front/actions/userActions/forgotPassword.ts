'use server';

import { useTranslation } from '@/i18n/index';
import { prisma } from '@/lib/prismaClient';
import { sendResetPasswordEmail } from '@/utils/sendEmail';
import validator from 'validator';

export async function ForgotPassword({ email }: { email: string }) {
  const { t } = await useTranslation('forgot-password');

  if (!validator.isEmail(email)) {
    const obj = {
      message: t('invalid-email'),
      field: 'email',
    };
    throw new Error(JSON.stringify(obj));
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    const obj = {
      message: t('email-not-registered'),
      field: 'email',
    };
    throw new Error(JSON.stringify(obj));
  }
  try {
    await sendResetPasswordEmail({ email: email, userId: user.id });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
  return { email };

  await prisma.$disconnect();
}
