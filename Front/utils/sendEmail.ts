// import nodemailer from 'nodemailer';
import { Resend } from 'resend';

import { baseTemplate } from 'emailTemplates';
import { randomUUID } from 'crypto';
import { prisma } from '@/lib/prismaClient';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
    // const transporter = nodemailer.createTransport({
    //   host: process.env.MAIL_SERVER_HOST as string,
    //   port: process.env.MAIL_SERVER_PORT,
    //   ignoreTLS: true,
    // });
  
    // const mailOptions = {
    //   from: process.env.MAIL_FROM,
    //   to: to,
    //   subject: subject,
    //   html: html,
    // };

    // try {
    //     const info = await transporter.sendMail(mailOptions);
    //     return info;
    // } 
    // catch (error) {
    //     console.error('Erreur lors de l\'envoi de l\'e-mail: ', error);
    //     throw error;
    // }

    const { data, error } = await resend.emails.send({
      from: process.env.MAIL_FROM as string,
      to: to,
      subject: subject,
      html: html,
    });
  
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail: ', error);
      throw error;
    }
}

export async function generateVerificationEmailToken(userId: string) {
  const token = await prisma.activateToken.create({
    data: {
      userId: userId,
      token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
    },
  });
  await prisma.$disconnect()
  return token.token;
}

export async function sendVerificationEmail({email, userId, update}:{email: string, userId: string, update?: boolean}){
  const token = generateVerificationEmailToken(userId)

  const routeName = update ? 'verify-updated-email' : 'verify-email'
  const subtitle = update ? 'To link the email address to your account, please verify that this is your email address.' : 'To continue setting up your account, please verify that this is your email address.'
  const emailContent = baseTemplate({
    title: 'Verify your email address',
    subtitle: subtitle,
    buttonLink: `${process.env.NEXT_URL}/api/${routeName}/${token}`,
    buttonText: 'Verify email address',
    additionalText: 'This link will expire in 5 days. if you did not make this request, please disregard this email.'
  });

  await sendEmail({
    to: email,
    subject: "Verify your email address",
    html: emailContent,
  });

  await prisma.$disconnect()
}

export async function sendResetPasswordEmail({email, userId}:{email: string, userId: string}){
  const token = await prisma.passwordResetToken.create({
    data: {
    userId: userId,
    token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
    },
  });

  const emailContent = baseTemplate({
    title: 'Reset password',
    subtitle: 'A password change has been requested for your account. If this was you, please use the link below to reset your password',
    buttonLink: `${process.env.NEXT_URL}/password-reset/${token.token}`,
    buttonText: 'Reset password',
    additionalText: ''
  });

  await sendEmail({
    to: email,
    subject: "Reset password",
    html: emailContent,
  });
    
  await prisma.$disconnect()
}

export async function sendInvoiceEmail({email, userId}:{email: string, userId: string}){
  const emailContent = baseTemplate({
    title: 'Subscription invoice',
    subtitle: 'Thanks for your subscription.',
    buttonLink: `${process.env.NEXT_URL}`,
    buttonText: 'Dashboard',
    additionalText: ''
  });

  await sendEmail({
    to: email,
    subject: "Subscription invoice",
    html: emailContent,
  });
    
  await prisma.$disconnect()
}