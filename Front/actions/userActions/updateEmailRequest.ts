"use server"

import { ValidateEmail } from "./validateEmail";
import { CheckPassword } from "./checkPassword";
import { SaveSubmittedEmailUpdate } from "./saveSubmittedEmailUpdate";
import { SendVerificationUpdatedEmail } from "./sendVerificationUpdatedEmail";
import { useTranslation } from '@/i18n/index'


export async function UpdateEmailRequest(email: string, password: string): Promise<void> {
    const { t } = await useTranslation('settings')

    const isValidEmail = await ValidateEmail(email);
    if (isValidEmail?.error) {
        const obj = {
            message: t('general.invalid-email'),
            field: "email",
        };
        throw Error(JSON.stringify(obj));
    }

    let isPasswordMatching: Boolean;
    try {
        isPasswordMatching = await CheckPassword(password);
    } catch (error) {
        const obj = {
            message:  'Internal Server Error',
        };
        throw Error(JSON.stringify(obj));
    }
    
    if(!isPasswordMatching){
        const obj = {
            message:  t('security.incorrect-password'),
            field: "password",
        };
        throw Error(JSON.stringify(obj));
    }
    else{
        await SaveSubmittedEmailUpdate(email);
        SendVerificationUpdatedEmail(email);
    }
    
}