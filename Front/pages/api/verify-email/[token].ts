import { prisma } from '@/lib/prismaclient'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token  = req.query.token as string
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
                gt: new Date(Date.now() - 24 * 60 * 60 * 1000),
              },
            },
            {
              token
            },
          ],
        },
      },
    },
  })
  if (!user) {
    throw new Error('Token is invalid or expired')
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      active: true,
    },
  })

  await prisma.activateToken.update({
    where: {
      token,
    },
    data: {
      activatedAt: new Date(),
    },
  })

  await prisma.$disconnect()
  
  res.writeHead(302, {
    Location: '/verify-email/success',
  });
  res.end();
}