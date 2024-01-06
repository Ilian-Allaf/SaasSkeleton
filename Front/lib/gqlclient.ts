import { GraphQLClient } from 'graphql-request';
import { cookies } from 'next/headers';
import { decode, JWT } from 'next-auth/jwt';
import { generateHasuraJwt } from '@/lib/generateHasuraJwt'
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"

export const setupGraphQLClient = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
   return null;
  }
  const cookieStore = cookies();
  const encodedSessionToken = cookieStore.get('next-auth.session-token')?.value as string;
  const decodedSessionToken = await decode({
    token: encodedSessionToken,
    secret: process.env.NEXTAUTH_SECRET as string,
  }) as JWT;

  const gqlClient = new GraphQLClient(process.env.HASURA_URL as string, {
    headers: {
      'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`,
      'Authorization': `${generateHasuraJwt(decodedSessionToken)}`,
    },
  });

  return gqlClient;
};


