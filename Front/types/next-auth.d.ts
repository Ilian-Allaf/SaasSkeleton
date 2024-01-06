// import NextAuth from "next-auth"
import { DateTime } from "aws-sdk/clients/devicefarm";
import { DefaultSession } from "next-auth"
import { User as PrismaUser } from 'prisma/prisma-client'
import {AuthAdapter} from './adapter'


declare module "next-auth" {
  interface User extends PrismaUser {}

  interface Session {
    user: {
      id: string,
      email: string,
      username: string,
      // language: string;
      // timezone: string;
    } & Omit<DefaultSession['user'], 'id'>;
  }
}

declare module '@auth/core/adapters' {
  // interface Adapter extends AuthAdapter {}
  // interface AdapterAccount {}
  // interface AdapterSession {}

  interface AdapterUser extends PrismaUser{
    emailVerified: boolean
  }
  // type ModifiedAdapterUser = Modify<AdapterUser, {emailVerified:boolean}>
}