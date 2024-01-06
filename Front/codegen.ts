import type { CodegenConfig } from '@graphql-codegen/cli';
require('@next/env').loadEnvConfig('./')
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.HASURA_URL || '']: {
      "headers": {
        "x-hasura-role": "admin",
        "x-hasura-admin-secret": "myadminsecretkey"
      }
    }
  }],
  documents: "./graphql/*.gql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ['typescript']
    },
    // "./graphql.schema.json": {
    //   plugins: []
    // }
  }
};

export default config;
