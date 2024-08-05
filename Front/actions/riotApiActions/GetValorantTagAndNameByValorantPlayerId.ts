'use server';

interface ValorantPlayer {
  username: string;
  tag: string;
  region: string;
}

export async function GetValorantTagAndNameByValorantPlayerId({
  valorant_player_id,
}: {
  valorant_player_id: string;
}): Promise<ValorantPlayer> {
  const options = {
    method: 'GET',
    headers: { authorization: process.env.HENRIK_DEV_API_KEY as string },
  };

  try {
    const response = await fetch(
      `https://api.henrikdev.xyz/valorant/v2/by-puuid/account/${valorant_player_id}`,
      options
    );

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const jsonReponse = await response.json();

    return {
      username: jsonReponse.data.name,
      tag: jsonReponse.data.tag,
      region: jsonReponse.data.region,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
}
