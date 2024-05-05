"use server"

import { CheckPassword } from "./checkPassword";
import { isPasswordValid } from '@/utils/passwordCheck';
import { prisma } from "@/lib/prismaclient";
import { authOptions } from "@/auth/[...nextauth]";
import { getServerSession } from "next-auth"
import bcrypt from 'bcrypt';
import { useTranslation } from '@/i18n/index'


export async function SubmitPasswordUpdateRequest(currentPassword: string, newPassword: string) {
    const { t } = await useTranslation('settings')

    try {
        const session = await getServerSession(authOptions)
        if(!session){
            return {
                error: 'Not Authenticated',
            };
        };
        const isPasswordMatching = await CheckPassword(currentPassword);
        if (isPasswordMatching?.error) {
            return{
                error:  t('security.incorrect-password'),
                field: "currentPassword",
            };
        }
        if(!isPasswordValid(newPassword)) {
            return{
                error:  t('security.invalid-password'),
                field: "newPassword",
            };
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updatedUser = await prisma.user.update({
            where: {
              id: session.user.id
            },
            data: {
              password: hashedPassword
            }
          });

        if(!updatedUser){
            return {
                error: 'Internal Server Error',
            };
        }
      }
    

    catch (error) {
        return {
            error: 'Internal Server Error',
        };
    };
}