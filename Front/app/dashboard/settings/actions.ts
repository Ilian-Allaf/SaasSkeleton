"use server"

import { setupGraphQLClient } from "@/lib/gqlclient";
import { UpdateUsernameDocument } from "@/src/gql/graphql";
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { revalidatePath } from "next/cache";


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
        if(newUsername.length < 3  || newUsername.length > 20){
            return {
                error: 'Username must be at least 3 characters long',
            };
        };
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
