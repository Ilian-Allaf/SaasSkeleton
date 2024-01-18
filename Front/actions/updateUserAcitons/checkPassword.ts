"use server"

import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { prisma } from "@/lib/prismaclient";

import bcrypt from "bcrypt";

export async function CheckPassword(password: string) {
    try {
        const session = await getServerSession(authOptions)
        if(!session){
            return {
                error: 'Not Authenticated',
            };
        };

        const user = await prisma.user.findUnique({
            where: {
              email: session.user.email
            }
        });

        if (!user?.password || !(await bcrypt.compare(password, user.password!))){
            return {
                error: 'Incorrect Password',
            };
        }
        return {
           success: 'Password is correct',
        };
    }
    catch (error) {
        return {
            error: 'Internal Server Error',
        };
    };
}