'use server';

import { useTranslation } from '@/i18n/index';
import { prisma } from '@/lib/prismaClient';
import domains from 'disposable-email-domains';
import validator from 'validator';

export async function ValidateEmail(email: string) {
  const { t } = await useTranslation('settings');

  const existingUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return {
      error: {
        message: t('general.email-taken'),
        field: null,
      },
    };
  }

  const domain = email.split('@')[1];
  if (
    !validator.isEmail(email) ||
    domains.includes(domain) ||
    email.includes('+') ||
    email.length > 100
  ) {
    return {
      error: {
        message: t('general.invalid-email'),
        field: null,
      },
    };
  }
}
