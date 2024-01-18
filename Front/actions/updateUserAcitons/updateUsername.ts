"use server"

import { setupGraphQLClient } from "@/lib/gqlclient";
import { UpdateUsernameDocument } from "@/src/gql/graphql";
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prismaclient";
import validator from "validator";



export async function UpdateUsername(newUsername: string) {
    try {
        const session = await getServerSession(authOptions)
        const gqlClient = await setupGraphQLClient();

        if(!session){
            return {
                error: 'Not Authenticated',
            };
        };

        //Validate newUsername
        if(!validator.isAlphanumeric(newUsername) || newUsername.length > 20) {
            return {
                error: 'Special characters are not allowed in username',
            };
        }
        
        const existingUser = await prisma.user.findFirst({
            where: {
                username: newUsername ,
            },
          });

        if (existingUser) {
            return {
                error: 'Username already taken',
            };
        }

        const result = await gqlClient!.request( UpdateUsernameDocument, { id: session?.user.id, username: newUsername} );
        if (result.update_auth_user_by_pk?.username === null) {
            return {
                error: 'Internal Server Error',
            };
        }
        revalidatePath('/dashboard/settings');
    }

    catch (error) {
        return {
            error: 'Internal Server Error',
        };
    };
}
