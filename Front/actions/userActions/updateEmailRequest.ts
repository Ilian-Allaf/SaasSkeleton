'use server';

import { useTranslation } from '@/i18n/index';
import { CheckPassword } from './checkPassword';
import { SaveSubmittedEmailUpdate } from './saveSubmittedEmailUpdate';
import { SendVerificationUpdatedEmail } from './sendVerificationUpdatedEmail';
import { ValidateEmail } from './validateEmail';

export async function UpdateEmailRequest(
  email: string,
  password: string
): Promise<any> {
  const { t } = await useTranslation('settings');

  const isValidEmail = await ValidateEmail(email);
  if (isValidEmail?.error) {
    return {
      error: {
        message: t('general.invalid-email'),
        field: 'email',
      },
    };
  }

  const isPasswordMatching = await CheckPassword(password);

  if (!isPasswordMatching) {
    return {
      error: {
        message: t('security.incorrect-password'),
        field: 'password',
      },
    };
  } else {
    await SaveSubmittedEmailUpdate(email);
    SendVerificationUpdatedEmail(email);
  }
}
