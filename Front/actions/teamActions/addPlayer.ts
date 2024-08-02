'use server';

import { setupGraphQLClient } from '@/lib/gqlClient';
import { UpdateUserTeamIdDocument } from '@/src/gql/graphql';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function addPlayer({ teamId }: { teamId?: string }): Promise<any> {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.error('Not authenticated');
    return {
      error: {
        message: 'Not authenticated',
        field: null,
      },
    };
  }
  const gqlClient = await setupGraphQLClient();
  await gqlClient!.request(UpdateUserTeamIdDocument, {
    id: session.user.id,
    teamid: teamId,
  });
}
