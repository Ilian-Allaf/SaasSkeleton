'use server';

import { prisma } from '@/lib/prismaClient';
import bcrypt from 'bcrypt';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function CheckPassword(password: string): Promise<any> {
  const session = await getServerSession(authOptions);
  if (!session) {
    return {
      error: {
        message: 'Not authenticated',
        field: null,
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user?.password || !(await bcrypt.compare(password, user.password!))) {
    return false;
  }
  return true;
}
