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
    teamid: data.insert_team_one?.id,
  }); // next step is to add a parameter to set this user as admin/captain in the team. Otherwise create two different files for adding people doesnt make sense (addPlayer / registerUserTeam)
  return data.insert_team_one?.id;
}
