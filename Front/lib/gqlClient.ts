import { GraphQLClient } from 'graphql-request';
import { cookies } from 'next/headers';
import { decode, JWT } from 'next-auth/jwt';
import { generateHasuraJwt } from '@/lib/generateHasuraJwt'
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { NextApiRequest, NextApiResponse } from 'next';
import { getCookie } from 'cookies-next';

export const setupGraphQLClient = async (req?: NextApiRequest, res?: NextApiResponse) => {
  let encodedSessionToken
  let session:any;
  if (req && res) {
    session = await getServerSession(req, res, authOptions);
    encodedSessionToken =  getCookie(process.env.NEXTAUTH_SESSION_COOKIE_NAME as string, { req, res})
  } 
  else {
    session = await getServerSession(authOptions);
    const cookieStore = cookies();
    encodedSessionToken = cookieStore.get(process.env.NEXTAUTH_SESSION_COOKIE_NAME as string)?.value as string;
  }
  if (!session) {
    console.error('No session found');
   return null;
  }
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


