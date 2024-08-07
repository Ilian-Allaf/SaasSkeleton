'use server';

import { prisma } from '@/lib/prismaClient';
import { sendVerificationEmail } from '@/utils/sendEmail';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function ResendVerificationEmail() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      error: {
        message: 'Not authenticated',
        field: null,
      },
    };
  }

  await sendVerificationEmail({
    email: session.user.email,
    userId: session.user.id,
  });

  await prisma.$disconnect();
}
