import { prisma } from '@/lib/prismaclient'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt';
import { isPasswordValid } from '@/utils/passwordCheck'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {token, password}  = req.body

    
    if (!token || !isPasswordValid(password)) {
        return res.status(422).json({ message: 'Invalid input data' });
    }

    const passwordResetToken = await prisma.passwordResetToken.findUnique({
        where: {
          token,
          createdAt: { gt: new Date(Date.now() - 1000 * 60 * 60 * 4) }, //4h
          resetAt: null,
        },
    });


    if (!passwordResetToken) {
        return {
            error:
            'Invalid token reset request. Please try resetting your password again.',
        }
    }

    const user = await prisma.user.findUnique({
      where: {
        id: passwordResetToken.userId
      }
    });
    
    if(!user || await bcrypt.compare(password, user.password!)){
      return res.status(422).json({ message: 'You cannot change for the same password' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updateUser = prisma.user.update({
        where: { id: passwordResetToken.userId },
        data: {
          password: hashedPassword,
          active: true
        },
    });

    const updateToken = prisma.passwordResetToken.update({
        where: {
          id: passwordResetToken.id,
        },
        data: {
          resetAt: new Date(),
        },
    });

    try {
        await prisma.$transaction([updateUser, updateToken])
        await prisma.$disconnect()
      } catch (err) {
        console.error(err)
        return {
          error: `An unexpected error occured. Please try again and if the problem persists, contact support.`,
        }
      }

    return res.status(200).json({ message: 'Successfully updated the password !' });
}