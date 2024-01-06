import 'server-only';
import NextAuth from 'next-auth';
import type { Session } from 'next-auth/types';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { User } from 'prisma/prisma-client'
import bcrypt from "bcryptjs";
import { authAdapter } from './adapter';
import validator from 'validator';
import { prisma } from './lib/prismaclient';
import { randomUUID } from 'crypto';
import { PrismaAdapter } from '@auth/prisma-adapter';
// import type { Adapter } from "@auth/core/adapters"

const session_max_age = process.env.SESSION_MAX_AGE ? parseInt(process.env.SESSION_MAX_AGE): 1200

export const providers = [
  Credentials({
    credentials: {
      email: { label: "Email", type: "text"},
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials: Partial<Record<"email" | "password", unknown>>) {
        console.log("here")
        console.log(credentials)
        try {
          if (credentials?.email && !validator.isEmail(credentials?.email as string)) {
            return null;
          }
          console.log("here")
          const user = await prisma.user.findUnique({
            where: {
              email: credentials?.email as string
            }
          });
          console.log("here")
          if (!user) {
            return null;
          }
      
          if (!credentials?.password || !await bcrypt.compare(credentials?.password as string, user.password!)) {
            return null;
          }
      
          return user as User;
      
        } catch (error) {
          console.error(error);
          return null;
        }
      },
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authorization: {
      params: {
        scope: 'email',
      },
    },
    // httpOptions: {
    //   timeout: 10000,
    // },

  }),
];

export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({
  adapter: authAdapter(),
  callbacks: {
    async jwt({ user }) {
      // Override default jwt callback behavior.
      // Create a session instead and then return that session token for use in the
      // `jwt.encode` callback below.
      const session = await authAdapter().createSession?.({
        expires: new Date(Date.now() + session_max_age * 1000),
        sessionToken: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
        userId: user.id,
      });

      return { id: session?.sessionToken };
    },
    async session({ session: defaultSession, user }) {
      // Make our own custom session object.
      const session: Session = {
        user: { 
            id: user.id,
            email: user.email,
            username: user.username,
         },
        expires: defaultSession.expires,
      };

      return session;
    },
  },
  jwt: {
    async encode({ token }) {
      // This is the string returned from the `jwt` callback above.
      // It represents the session token that will be set in the browser.
      return token?.id as unknown as string;
    },
    async decode() {
      // Disable default JWT decoding.
      // This method is really only used when using the email provider.
      return null;
    },
  },
  providers,
  session: {
    strategy: 'database',
    maxAge: session_max_age,
    generateSessionToken: () => `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
  },
});