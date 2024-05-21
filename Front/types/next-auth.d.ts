import NextAuth from "next-auth"
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string,
      email: string,
      username: string,
      active: string,
      subscriptionPlan: string,
    };
  }
  interface Profile {
    email: string,
    image: string,
    sub: string,
    name: string,
    email_verified: boolean,
  }

}