"use server"

import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { prisma } from "@/lib/prismaclient";
import { useTranslation } from '@/i18n/index'


import bcrypt from "bcrypt";

export async function CheckPassword(password: string) {
    const { t } = await useTranslation('settings')

    try {
        const session = await getServerSession(authOptions)
        if(!session){
            console.error('No session found');
            return {
                error: 'Not Authenticated',
            };
        };

        const user = await prisma.user.findUnique({
            where: {
              email: session.user.email
            }
        });

        if (!user?.password || !(await bcrypt.compare(password, user.password!))){
            return {
                error: t('security.incorrect-password'),
            };
        }
        return {
           success: 'Password is correct',
        };
    }
    catch (error) {
        console.error('An error occurred', error);
        return {
            error: 'Internal Server Error',
        };
    };
}