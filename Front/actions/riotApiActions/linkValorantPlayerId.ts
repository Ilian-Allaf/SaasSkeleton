'use server';

import { setupGraphQLClient } from '@/lib/gqlClient';
import { UpdatePlayerValorantIdDocument } from '@/src/gql/graphql';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function LinkValorantPlayerId({
  username,
  tag,
}: {
  username: string;
  tag: string;
}): Promise<void> {
  const options = {
    method: 'GET',
    headers: { authorization: process.env.HENRIK_DEV_API_KEY as string },
  };

  try {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v1/account/${username}/${tag}`,
      options
    );

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const jsonReponse = await response.json();
    console.log(jsonReponse);
    const valorantPlayerId = jsonReponse.data.puuid;

    const session = await getServerSession(authOptions);
    const gqlClient = await setupGraphQLClient();

    const result = await gqlClient!.request(UpdatePlayerValorantIdDocument, {
      id: session?.user.id,
      valorant_player_id: valorantPlayerId,
    });

    if (!result.update_auth_user_by_pk?.id) {
      throw new Error('Error updating valorant player id');
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}
