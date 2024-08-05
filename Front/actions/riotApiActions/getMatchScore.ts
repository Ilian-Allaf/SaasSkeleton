'use server';

import { setupGraphQLClient } from '@/lib/gqlClient';
import { GetTeamMembersValorantUuIdByTeamIdDocument } from '@/src/gql/graphql';
import { GetValorantTagAndNameByValorantPlayerId } from './GetValorantTagAndNameByValorantPlayerId';

const X_LAST_MATCHES = 3;

export async function GetMatchScore({
  redTeamId,
  blueTeamId,
}: {
  redTeamId: string;
  blueTeamId: string;
}): Promise<any> {
  const localRedTeamMembers: Set<string> =
    await getTeamMembersValorantUUIDByTeamId(redTeamId);

  const localBlueTeamMembers: Set<string> =
    await getTeamMembersValorantUUIDByTeamId(blueTeamId);

  const options = {
    method: 'GET',
    headers: { authorization: process.env.HENRIK_DEV_API_KEY as string },
  };

  const { username, tag, region } =
    await GetValorantTagAndNameByValorantPlayerId({
      valorant_player_id: localRedTeamMembers.values().next().value,
    });

  try {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v3/matches/${region}/${username}/${tag}?mode=custom&size=${X_LAST_MATCHES}`,
      options
    );

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    const matches = data.data;

    for (const match of matches) {
      const players = match.players.all_players;
      const { fetchedRedTeamMembers, fetchedBlueTeamMembers } =
        groupPlayersByTeam(players);
      const { winner, score } = calculateScoreAndWinner({
        rounds: match.rounds,
      });

      if (
        areSetsEqual(fetchedRedTeamMembers, localRedTeamMembers) &&
        areSetsEqual(fetchedBlueTeamMembers, localBlueTeamMembers)
      ) {
        return {
          winner: winner === 'Red' ? redTeamId : blueTeamId,
          score: score,
        };
      } else if (
        areSetsEqual(fetchedRedTeamMembers, localBlueTeamMembers) &&
        areSetsEqual(fetchedBlueTeamMembers, localRedTeamMembers)
      ) {
        return {
          winner: winner === 'Red' ? blueTeamId : redTeamId,
          score: score,
        };
      }
    }

    return null;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function groupPlayersByTeam(players: any): {
  fetchedRedTeamMembers: any;
  fetchedBlueTeamMembers: any;
} {
  const fetchedRedTeamMembers: Set<any> = new Set();
  const fetchedBlueTeamMembers: Set<any> = new Set();

  for (const player of players) {
    if (player.team === 'Red') {
      fetchedRedTeamMembers.add(player.puuid);
    } else if (player.team === 'Blue') {
      fetchedBlueTeamMembers.add(player.puuid);
    }
  }

  return { fetchedRedTeamMembers, fetchedBlueTeamMembers };
}

async function getTeamMembersValorantUUIDByTeamId(
  teamId: string
): Promise<Set<string>> {
  const gqlClient = await setupGraphQLClient();
  const result = await gqlClient!.request(
    GetTeamMembersValorantUuIdByTeamIdDocument,
    {
      teamId: teamId,
    }
  );

  const valorantPlayerIds = result.team_by_pk?.users.map(
    (user: { valorant_player_id: string }) => user.valorant_player_id
  );

  return new Set(valorantPlayerIds);
}

function areSetsEqual(set1: Set<any>, set2: Set<any>): boolean {
  if (set1.size !== set2.size) {
    return false;
  }
  for (let item of set1) {
    if (!set2.has(item)) {
      return false;
    }
  }
  return true;
}

function calculateScoreAndWinner({ rounds }: { rounds: any }): {
  winner: any;
  score: any;
} {
  let blueWinningRoundcount = 0;
  let redWinningRoundcount = 0;
  for (const round of rounds) {
    if (round.winning_team === 'Red') {
      redWinningRoundcount++;
    } else if (round.winning_team === 'Blue') {
      blueWinningRoundcount++;
    }
  }

  return {
    winner: blueWinningRoundcount > redWinningRoundcount ? 'Blue' : 'Red',
    score: `${blueWinningRoundcount}-${redWinningRoundcount}`,
  };
}
