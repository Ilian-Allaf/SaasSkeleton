'use server';

import { setupGraphQLClient } from '@/lib/gqlClient';
import {
    GetUserTeamNameDocument,
    GetUserTeamNameQuery,
  } from '@/src/gql/graphql';
  import { getServerSession } from 'next-auth';
  import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function getUserTeamName(teamId : string): Promise<any> {
    const session = await getServerSession(authOptions);
    if (!session) {
      console.error('here');
      return {
        error: {
          message: 'Not authenticated',
          field: null,
        },
      };
    } 
    const gqlClient = await setupGraphQLClient();
    const data :  GetUserTeamNameQuery = await gqlClient!.request(GetUserTeamNameDocument, {teamid : teamId} )
    return data.team_by_pk?.name
}
