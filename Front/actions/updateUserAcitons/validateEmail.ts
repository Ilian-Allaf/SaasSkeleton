"use server"

import { prisma } from "@/lib/prismaclient";
import validator from "validator";
import domains from 'disposable-email-domains';


export async function ValidateEmail(email: string) {
    const existingUser = await prisma.user.findFirst({
        where: {
            email: email ,
        },
      });

    if (existingUser) {
        return {
            error: 'Email already taken',
        };
    }

    const domain = email.split("@")[1];
    if (!validator.isEmail(email) || domains.includes(domain) || email.includes('+') || email.length > 100){
        return {
            error: 'Invalid Email',
        }
      }
}