import type { CodegenConfig } from '@graphql-codegen/cli';
require('@next/env').loadEnvConfig('./')
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.HASURA_URL || '']: {
      "headers": {
        "x-hasura-role": "admin",
        "x-hasura-admin-secret": `${process.env.HASURA_ADMIN_SECRET}`
      }
    }
  }],
  documents: "./graphql/*.gql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
    // "./graphql.schema.json": {
    //   plugins: []
    // }
  }
    // generates: {
  //   "src/gql/graphql.tsx": {
  //     // preset: "client",
  //     plugins: ['typescript', 'typescript-operations'],
  //     // config: {
  //     //   enumsAsTypes: true,
  //     //   futureProofUnions: true,
  //     // },
  //   },
  //   "./graphql.schema.json": {
  //     plugins: ['introspection']
  //   }
  // }
};



export default config;