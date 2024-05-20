import { GraphQLClient } from 'graphql-request';
import { cookies } from 'next/headers';
import { decode, JWT } from 'next-auth/jwt';
import { generateHasuraJwt } from '@/lib/generateHasuraJwt'
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { NextApiRequest, NextApiResponse } from 'next';
import { getCookie } from 'cookies-next';

export const setupUnauthenticatedGraphQLClient = async (req?: NextApiRequest, res?: NextApiResponse) => {
    const data = {
        sub: 'service',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        role: 'service',
    };
    const gqlClient = new GraphQLClient(process.env.HASURA_URL as string, {
    headers: {
        'x-hasura-admin-secret': `${process.env.HASURA_ADMIN_SECRET}`,
        'Authorization': `${generateHasuraJwt(data)}`,
    },
  });
  
  return gqlClient;
};


