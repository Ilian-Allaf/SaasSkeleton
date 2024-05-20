import { prisma } from "@/lib/prismaClient";
import { sendVerificationEmail } from "@/utils/sendEmail";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
    
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
     return res.status(401);
    }

    await sendVerificationEmail({email: session.user.email, userId: session.user.id})
    await prisma.$disconnect()
}