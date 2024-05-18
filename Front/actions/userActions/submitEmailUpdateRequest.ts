"use server"

import { ValidateEmail } from "./validateEmail";
import { CheckPassword } from "./checkPassword";
import { SaveSubmittedEmailUpdate } from "./saveSubmittedEmailUpdate";
import { SendVerificationUpdatedEmail } from "./sendVerificationUpdatedEmail";
import { useTranslation } from '@/i18n/index'


export async function SubmitEmailUpdateRequest(email: string, password: string) {
    const { t } = await useTranslation('settings')

    try {
        const isValidEmail = await ValidateEmail(email);
  
        if (isValidEmail?.error) {
            return{
                error: t('security.invalid-email'),
                field: "email",
            };
        }

        const isPasswordMatching = await CheckPassword(password);
        if (isPasswordMatching?.error) {
            return{
                error: t('security.incorrect-password'),
                field: "password",
            };
        }
        else{
          await SaveSubmittedEmailUpdate(email);
          SendVerificationUpdatedEmail(email);
        }
    }

    catch (error) {
        console.error('An error occurred', error);
        return {
            error: 'Internal Server Error',
        };
    };
}