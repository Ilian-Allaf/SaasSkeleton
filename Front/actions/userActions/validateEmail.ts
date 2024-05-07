"use server"

import { prisma } from "@/lib/prismaclient";
import validator from "validator";
import domains from 'disposable-email-domains';
import { useTranslation } from '@/i18n/index'


export async function ValidateEmail(email: string) {
    const { t } = await useTranslation('settings')

    const existingUser = await prisma.user.findFirst({
        where: {
            email: email ,
        },
      });

    if (existingUser) {
        return {
            error: t('general.email-taken'),
        };
    }

    const domain = email.split("@")[1];
    if (!validator.isEmail(email) || domains.includes(domain) || email.includes('+') || email.length > 100){
        return {
            error: t('general.invalid-email'),
        }
      }
}