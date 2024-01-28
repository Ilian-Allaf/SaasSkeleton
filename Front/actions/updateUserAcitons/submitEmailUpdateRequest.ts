"use server"

import { ValidateEmail } from "./validateEmail";
import { CheckPassword } from "./checkPassword";
import { SaveSubmittedEmailUpdate } from "./saveSubmittedEmailUpdate";
import { SendVerificationUpdatedEmail } from "./sendVerificationUpdatedEmail";

export async function SubmitEmailUpdateRequest(email: string, password: string) {
    try {
        const isValidEmail = await ValidateEmail(email);
  
        if (isValidEmail?.error) {
            return{
                error: 'Invalid Email',
                field: "email",
            };
        }

        const isPasswordMatching = await CheckPassword(password);
        if (isPasswordMatching?.error) {
            return{
                error: 'Incorrect password',
                field: "password",
            };
        }
        else{
          await SaveSubmittedEmailUpdate(email);
          SendVerificationUpdatedEmail(email);
        }
    }

    catch (error) {
        return {
            error: 'Internal Server Error',
        };
    };
}