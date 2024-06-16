import { prisma } from '@/lib/prismaClient';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.query.token as string;
  const activateToken = await prisma.activateToken.findFirst({
    where: {
      token,
      activatedAt: null,
      createdAt: {
        gt: new Date(Date.now() - 24 * 60 * 60 * 1000), //1 day
      },
      isValid: true,
    },
  });
  if (!activateToken) {
    res.writeHead(302, {
      Location: '/verify-email/failed',
    });
    res.end();
  } else {
    await prisma.user.update({
      where: {
        id: activateToken.userId,
      },
      data: {
        active: true,
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
      Location: '/verify-email/success',
    });
    res.end();
  }
}
