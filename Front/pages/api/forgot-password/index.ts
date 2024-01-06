import { prisma } from '@/lib/prismaclient'
import { sendResetPasswordEmail } from '@/utils/sendEmail'
import { NextApiRequest, NextApiResponse } from 'next'
import validator from 'validator'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email }  = req.body
    if (!validator.isEmail(email)){
        return res.status(400).json({ message: 'Invalid email' });
    }

    const user = await prisma.user.findUnique({
        where: { email },
    })

    if (!user) {
        return {
            error: 'This email is not registered',
        }
    }
    
    await sendResetPasswordEmail({email: email, userId: user.id});

    await prisma.$disconnect()

    res.status(200).json({ message: 'Successfully sent email !' });
}