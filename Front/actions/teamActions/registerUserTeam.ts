'use server';

import { setupGraphQLClient } from '@/lib/gqlClient';
import {
  CreateTeamDocument,
  UpdateUserTeamIdDocument,
  CreateTeamMutation
} from '@/src/gql/graphql';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { revalidatePath } from 'next/cache';

export async function RegisterUserTeam({ name }: { name?: string; }): Promise<any> {
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
  const data: CreateTeamMutation = await gqlClient!.request(CreateTeamDocument, { name: name });
  await gqlClient!.request(UpdateUserTeamIdDocument, { id: session.user.id, teamid: data.insert_team_one?.id });
  return data.insert_team_one?.id;
}
