"use server"

import { authOptions } from "@/auth/[...nextauth]";
import { prisma } from "@/lib/prismaclient";
import { getServerSession } from "next-auth"


export async function SaveSubmittedEmailUpdate(email: string) {
    const session = await getServerSession(authOptions)
    if(!session){
        return {
            error: 'Not Authenticated',
        };
    };

    try {
        //find user by id and update updated_email
        const user = await prisma.user.update({
            where: {
                id: session.user.id,
            },
            data: {
                updatedEmail: email,
            },
        })
        return {
            success: 'Email saved',
        };
    }
    catch (error) {
        return {
            error: 'Internal Server Error',
        };
    };
}