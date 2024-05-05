'use server'

import { prisma } from '@/lib/prismaclient'
import { sendResetPasswordEmail } from '@/utils/sendEmail'
import validator from 'validator'
import { useTranslation } from '@/i18n/index'


export async function ForgotPassword(email: string) {
    const { t } = await useTranslation("forgot-password")

    if (!validator.isEmail(email)){
        return {
            error: t('invalid-email'),
        };
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return {
            error: t('email-not-registered'),
        }
    }
    
    await sendResetPasswordEmail({email: email, userId: user.id});

    await prisma.$disconnect()

    return {
        message: 'Successfully sent email !'
    };
}