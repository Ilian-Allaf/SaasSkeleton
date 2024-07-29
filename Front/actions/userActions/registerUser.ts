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
  }): Promise<any> {
    const { t } = await useTranslation('signup');
    const domain = email.split('@')[1];

    if (!password || !email) {
      console.log('here');
      return {
        error: {
          message: 'You need to fill every field',
          field: null,
        },
      };
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser && existingUser.email === email) {
      console.log('here');
      return {
        error: {
          message: t('email-taken'),
          field: 'email',
        },
      };
    }

    if (
      !validator.isEmail(email) ||
      domains.includes(domain) ||
      email.includes('+') ||
      email.length > 100
    ) {
      return {
        error: {
          message: t('invalid-email'),
          field: 'email',
        },
      };
    }
    if (!isPasswordValid({ password: password })) {
      return {
        error: {
          message: t('weak-password'),
          field: 'password',
        },
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    await sendVerificationEmail({
      email: createdUser.email,
      userId: createdUser.id,
    });

    if (!createdUser.id) {
      console.error('User not created');
      return {
        error: {
          message: 'Internal Server Error',
          field: null,
        },
      };
    }

    await prisma.$disconnect();

    return {
      email: createdUser.email,
      password: password,
    };
  }
