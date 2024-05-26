'use server'

import { prisma } from '@/lib/prismaClient';
import { generateVerificationEmailToken, sendEmail } from '@/utils/sendEmail';
import { baseTemplate } from 'emailTemplates';
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import generator from 'generate-password';
import bcrypt from "bcrypt";

export async function ResendSubscriptionEmail({userId}: {userId: string}) {
    const session = await getServerSession(authOptions)
    let user;
    if (session) {
        user = session.user;
    }
    else {
        user = await prisma.user.findUnique({
            where: {
            id: userId
            }
        });
    }

    const email = user.email;
    let emailContent: any;

    const token = await generateVerificationEmailToken(user.id);
    const generatedPassword = generator.generate({length: 10, numbers: true, uppercase: true, symbols: true, strict: true});


    if(!session) {
        //update user with generated password
       const newUser = await prisma.user.update({
            where: { id: user.id },
            data: {
                password: await bcrypt.hash(generatedPassword, 10),
            },
        });
        console.log(newUser)
        emailContent = baseTemplate({
            title: 'Thank you for your subscription !',
            subtitle: `Thank you for your trust in our service. Here is your generated password: <b>${generatedPassword}</b><br>Please click the button below to activate your account.`,
            buttonLink: `${process.env.NEXT_URL}/api/verify-email/${token}`,
            buttonText: 'Activate account',
            additionalText: 'This link will expire in 5 days.'
          });
    }
    else
    {
        emailContent = baseTemplate({
            title: 'Thank you for your subscription !',
            subtitle: 'Thank you for your trust in our service.<br>Click the button below to access your dashboard.',
            buttonLink: `${process.env.NEXT_URL}/dashboard/`,
            buttonText: 'Go to dashboard',
            additionalText: ''
          });
    }
    try {
    await sendEmail({
        to: email,
        subject: "Subscription",
        html: emailContent,
      });
    }
    catch (error) {
        return {
            error: 'Failed to send email',
        };
    }
    return {
        success: true
    }
}
