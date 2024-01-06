export interface JwtHasuraClaims {
    "sub": string,
    "iat": string,
    "exp": string,
    "https://hasura.io/jwt/claims":{
        'x-hasura-default-role': string;
        'x-hasura-role': string;
        'x-hasura-user-id': string;
        "x-hasura-allowed-roles": string[];
    }
}