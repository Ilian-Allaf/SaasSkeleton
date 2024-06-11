'use server';

import { prisma } from '@/lib/prismaClient';
import { sendVerificationEmail } from '@/utils/sendEmail';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function ResendVerificationEmail() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error('Not authenticated');
  }
  try {
    await sendVerificationEmail({
      email: session.user.email,
      userId: session.user.id,
    });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
  await prisma.$disconnect();
}
