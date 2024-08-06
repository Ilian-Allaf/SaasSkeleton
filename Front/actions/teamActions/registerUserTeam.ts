'use server';

import { setupGraphQLClient } from '@/lib/gqlClient';
import {
  CreateTeamDocument,
  CreateTeamMutation,
  UpdateUserTeamIdDocument,
} from '@/src/gql/graphql';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function RegisterUserTeam({
  name,
}: {
  name: string;
}): Promise<any> {
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
  const data: CreateTeamMutation = await gqlClient!.request(
    CreateTeamDocument,
    { name: name, admin_id: session.user.id }
  );
  await gqlClient!.request(UpdateUserTeamIdDocument, {
    id: session.user.id,
    team_id: data.insert_team_one?.id,
  });
  return data.insert_team_one?.id;
}
