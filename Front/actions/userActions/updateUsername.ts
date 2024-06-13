'use server';

import { useTranslation } from '@/i18n/index';
import { setupGraphQLClient } from '@/lib/gqlClient';
import { prisma } from '@/lib/prismaClient';
import { UpdateUsernameDocument } from '@/src/gql/graphql';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import validator from 'validator';

export async function UpdateUsername(newUsername: string): Promise<any> {
  const { t } = await useTranslation('settings');
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

  //Validate newUsername
  if (!validator.isAlphanumeric(newUsername) || newUsername.length > 20) {
    return {
      error: {
        message: 'Special characters are not allowed in username',
        field: 'username',
      },
    };
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      username: newUsername,
    },
  });

  if (existingUser) {
    return {
      error: {
        message: t('general.username-taken'),
        field: 'username',
      },
    };
  }
  const result = await gqlClient!.request(UpdateUsernameDocument, {
    id: session?.user.id,
    username: newUsername,
  });
  if (result.update_auth_user_by_pk?.username === null) {
    console.error('Error updating username with gql');
    return {
      error: {
        message: 'Internal Server Error',
        field: null,
      },
    };
  }
  revalidatePath('/dashboard/settings');
}
