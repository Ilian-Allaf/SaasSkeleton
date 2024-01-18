"use server"

import { setupGraphQLClient } from "@/lib/gqlclient";
import { GetUserEmailDocument } from "@/src/gql/graphql";
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prismaclient";


export async function GetUpdatedEmail() {
    try {
        const session = await getServerSession(authOptions)
        const gqlClient = await setupGraphQLClient();

        if(!session){
            return {
                error: 'Not Authenticated',
            };
        };

        const result = await gqlClient!.request( GetUserEmailDocument, { id: session?.user.id} );
        if (result.auth_user_by_pk?.email === null) {
            return {
                error: 'Internal Server Error',
            };
        }
        revalidatePath('/dashboard/settings');
        await prisma.$disconnect()

        return result.auth_user_by_pk?.email
    }

    catch (error) {
        return {
            error: 'Internal Server Error',
        };
    };
}
