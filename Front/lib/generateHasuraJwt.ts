import jwt from 'jsonwebtoken';
import { JwtHasuraClaims } from '@/types/types'
import { JWT } from 'next-auth/jwt';

export function generateHasuraJwt(jwtNextAuthPayload: JWT): string {
  const secret = process.env.HASURA_JWT_SECRET as string;

  const jwtHasuraClaims: JwtHasuraClaims = {
    "sub": jwtNextAuthPayload.sub as string,
    "iat": jwtNextAuthPayload.iat as string,
    "exp": jwtNextAuthPayload.exp as string,
    "https://hasura.io/jwt/claims":{
        'x-hasura-default-role': 'user',
        'x-hasura-role': jwtNextAuthPayload.role as string,
        'x-hasura-user-id': jwtNextAuthPayload.id as string,
        "x-hasura-allowed-roles": ["admin", "user"],
    }
  };

  const token = jwt.sign(jwtHasuraClaims, secret, { algorithm: 'RS512' });
  return token;
}
