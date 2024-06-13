'use server';

import { authOptions } from '@/auth/[...nextauth]';
import { setupGraphQLClient } from '@/lib/gqlClient';
import { UpdateUpdatedEmailDocument } from '@/src/gql/graphql';
import { getServerSession } from 'next-auth';

export async function SaveSubmittedEmailUpdate(email: string) {
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

  const result = await gqlClient!.request(UpdateUpdatedEmailDocument, {
    id: session?.user.id,
    updated_email: email,
  });
  if (result.update_auth_user_by_pk != email) {
    console.error('Email not updated');
    return {
      error: {
        message: 'Internal Server Error',
        field: null,
      },
    };
  }
}
