"use server"

import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { prisma } from "@/lib/prismaClient";
import bcrypt from "bcrypt";

export async function CheckPassword(password: string): Promise<Boolean> {

    const session = await getServerSession(authOptions)
    if(!session){
        console.error('Not Authenticated');
        const obj = {
            message: 'Not Authenticated',
        };
        throw Error(JSON.stringify(obj));
    };

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if (!user?.password || !(await bcrypt.compare(password, user.password!))){
        return false;
    };
    return true
}