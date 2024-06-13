'use server';

import { sendVerificationEmail } from '@/utils/sendEmail';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function SendVerificationUpdatedEmail(email: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return {
      error: {
        message: 'Not Authenticated',
        field: null,
      },
    };
  }
  await sendVerificationEmail({
    email: email,
    userId: session.user.id,
    update: true,
  });
}
