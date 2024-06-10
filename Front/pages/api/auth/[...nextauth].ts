import { prisma } from '@/lib/prismaClient';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { User } from 'prisma/prisma-client';
import validator from 'validator';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.email && !validator.isEmail(credentials?.email)) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        await prisma.$disconnect();

        if (!user) {
          return null;
        }
        if (
          !credentials?.password ||
          !(await bcrypt.compare(credentials?.password, user.password!))
        ) {
          return null;
        }
        return user;
      },
    }),
  ],

  pages: {
    signIn: '/login',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
  },
  debug: true,
  session: {
    strategy: 'jwt',
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    // updateAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (credentials) {
        return true;
      }

      await prisma.user.upsert({
        where: {
          email: profile?.email,
        },
        create: {
          email: profile?.email!,
          username: profile?.name,
          active: profile?.email_verified,
          image: profile?.image,
        },
        update: {},
      });
      if (user) {
        await prisma.user.update({
          where: { email: user.email! },
          data: {
            active: true,
          },
        });
      }
      await prisma.$disconnect();
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, trigger, user, session }) {
      if (trigger === 'update') {
        if (session?.username) {
          token.username = session.username;
        } else if (session?.email) {
          token.email = session.email;
        } else if (session?.name) {
          token.name = session.name;
        }
      }

      if (user) {
        return {
          ...token,
          id: (user as User).id,
          email: (user as User).email,
          username: (user as User).username,
          role: (user as User).role,
          active: (user as User).active,
          subscriptionPlan: (user as User).subscribtionPlan,
        };
      }
      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          email: token.email,
          username: token.username,
          id: token.id,
          active: token.active,
          subscriptionPlan: token.subscriptionPlan,
        },
      };
    },
  },
};

export default NextAuth(authOptions);
