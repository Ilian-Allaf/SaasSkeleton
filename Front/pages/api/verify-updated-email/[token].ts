import { prisma } from '@/lib/prismaClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.query.token as string;
  const user = await prisma.user.findFirst({
    where: {
      activateTokens: {
        some: {
          AND: [
            {
              activatedAt: null,
            },
            {
              createdAt: {
                gt: new Date(Date.now() - 24 * 60 * 60 * 1000), //1 day
              },
            },
            {
              token,
            },
            {
              isValid: true,
            },
          ],
        },
      },
    },
  });
  if (!user) {
    res.writeHead(302, {
      Location: '/verify-email/failed',
    });
    res.end();
  } else {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        active: true,
        email: user.updatedEmail!,
        updatedEmail: null,
      },
    });

    await prisma.activateToken.update({
      where: {
        token,
      },
      data: {
        activatedAt: new Date(),
      },
    });

    await prisma.$disconnect();

    res.writeHead(302, {
      Location: '/verify-email/success?state=update',
    });
    res.end();
  }
}
