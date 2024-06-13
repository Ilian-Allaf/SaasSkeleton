'use server';

import { setupGraphQLClient } from '@/lib/gqlClient';
import { prisma } from '@/lib/prismaClient';
import { GetUserEmailDocument } from '@/src/gql/graphql';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function GetUpdatedEmail(): Promise<any> {
  const session = await getServerSession(authOptions);
  const gqlClient = await setupGraphQLClient();

  if (!session) {
    return {
      error: {
        message: 'Not Authenticated',
        field: null,
      },
    };
  }

  const result = await gqlClient!.request(GetUserEmailDocument, {
    id: session?.user.id,
  });
  if (result.auth_user_by_pk?.email === null) {
    console.error('No email found');
    return {
      error: {
        message: 'Internal Server Error',
        field: null,
      },
    };
  }
  revalidatePath('/dashboard/settings');
  await prisma.$disconnect();

  return result.auth_user_by_pk?.email;
}
