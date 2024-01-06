#!/bin/bash

npm install
npm run codegen
dotenv -e .env npx prisma db pull --url $POSTGRES_URL
npx prisma generate