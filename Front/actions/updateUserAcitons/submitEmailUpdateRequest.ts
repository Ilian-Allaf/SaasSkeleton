"use server"

import { setupGraphQLClient } from "@/lib/gqlclient";
import { UpdateEmailDocument } from "@/src/gql/graphql";
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prismaclient";

import { sendVerificationEmail } from "@/utils/sendEmail";
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

        const isPasswordValid = await CheckPassword(password);
        if (isPasswordValid?.error) {
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