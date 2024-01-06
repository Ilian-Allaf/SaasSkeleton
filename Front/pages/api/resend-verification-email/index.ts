import { prisma } from "@/lib/prismaclient";
import { sendVerificationEmail } from "@/utils/sendEmail";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../auth"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
    
    const session = await auth(req, res)
    if (!session) {
     return res.status(401);
    }

    await sendVerificationEmail({email: session.user.email, userId: session.user.id})
    await prisma.$disconnect()
}