import 'server-only';
import type { Adapter, AdapterUser } from '@auth/core/adapters';
import { Awaitable } from '@auth/core/types';

import { prisma } from '@/lib/prismaclient';
import { getIP } from './utils/getIP';

type AuthAdapter = {
  // Create type for createSession
  createUser: (
    // eslint-disable-next-line no-unused-vars
    data: Pick<AdapterUser, 'username' | 'email'>,
  ) => Awaitable<AdapterUser>;
} & Omit<Adapter, 'createUser'>;

export function authAdapter(): Adapter {
  return {
    async createSession(data) {
      // Collect IP and UserAgent information here.
      const createSessionResponse = await prisma.session.create({
        data: {
          token: data.sessionToken,
          userId: data.userId,
          expiresAt: data.expires,
          ip: getIP(),

        },
      });

      return {
        expires: createSessionResponse.expiresAt,
        sessionToken: createSessionResponse.token,
        userId: createSessionResponse.userId,
      };
    },
    async createUser(data) {
      const userData = {
        username: data.username,
        email: data.email
      };

      const newUser = await prisma.user.create({
        data: userData,
      });

      return newUser as AdapterUser; 
    },
    async deleteSession(token) {
      const session = await prisma.session.delete({ where: { token } });

      return {
        expires: session.expiresAt,
        sessionToken: session.token,
        userId: session.userId,
      };
    },
    async getSessionAndUser(token) {
      const userAndSession = await prisma.session.findUnique({
        where: { token },
        include: { user: true },
      });

      if (!userAndSession) return null;

      const { user, ...session } = userAndSession;

      return {
        user,
        session: {
          expires: session.expiresAt,
          sessionToken: session.token,
          userId: session.userId,
        },
      };
    },
    async getUserByAccount(oAuthProvider) {
      const { provider, providerAccountId } = oAuthProvider;

      // We'll only ever use Google or Apple, so we can just check for those.
      if (provider === 'google') {
        return prisma.user.findFirst({
          where: { googleId: providerAccountId },
        });
      }

      return null;
    },
    async updateSession(data) {
      const session = await prisma.session.update({
        where: { token: data.sessionToken },
        data: { token: data.sessionToken, expiresAt: data.expires },
      });

      return {
        expires: session.expiresAt,
        sessionToken: session.token,
        userId: session.userId,
      };
    },
    deleteUser: (id) => prisma.user.delete({ where: { id } }),
    getUser: (id) => prisma.user.findUnique({ where: { id } }),
    getUserByEmail: (email) => prisma.user.findUnique({ where: { email } }),
    linkAccount: async (data) => {
      if (data.provider === 'google') {
        const user = await prisma.user.update({
          where: { id: data.userId },
          data: {
            googleId: data.providerAccountId,
          },
        });

        if (user?.googleId)
          return {
            provider: data.provider,
            providerAccountId: user.googleId,
            type: data.type,
            userId: user.id,
          };
      }

      return null;
    },
    // unlinkAccount: (oAuthProvider) => {
    // Just do the opposite of linkAccount.
    // },
    updateUser: ({ id, ...data }) => prisma.user.update({ where: { id }, data }),
  };
}