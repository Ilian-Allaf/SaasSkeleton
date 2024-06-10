'use server';

import { useTranslation } from '@/i18n/index';
import { prisma } from '@/lib/prismaClient';
import { isPasswordValid } from '@/utils/passwordCheck';
import { sendVerificationEmail } from '@/utils/sendEmail';
import bcrypt from 'bcrypt';
import domains from 'disposable-email-domains';
import validator from 'validator';

export async function RegisterUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log('email', email);
  const { t } = await useTranslation('signup');
  const domain = email.split('@')[1];

  if (!password || !email) {
    return {
      success: false,
      message: 'You need to fill every field',
      field: 'all',
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (existingUser && existingUser.email === email) {
    const obj = {
      message: t('email-taken'),
      field: 'email',
    };
    throw Error(JSON.stringify(obj));
  }

  if (
    !validator.isEmail(email) ||
    domains.includes(domain) ||
    email.includes('+') ||
    email.length > 100
  ) {
    const obj = {
      message: t('invalid-email'),
      field: 'email',
    };
    throw Error(JSON.stringify(obj));
  }

  if (!isPasswordValid({ password: password })) {
    const obj = {
      message: t('weak-password'),
      field: 'password',
    };
    throw Error(JSON.stringify(obj));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });

  try {
    await sendVerificationEmail({
      email: createdUser.email,
      userId: createdUser.id,
    });
  } catch (error) {
    console.log('Error sending verification email', error);
    console.error('Error sending verification email', error);
    throw Error('Internal Server Error');
  }

  if (!createdUser.id) {
    console.log('Error creating user');
    throw Error('Internal Server Error');
  }

  await prisma.$disconnect();

  return {
    email: createdUser.email,
    password: password,
  };
}
