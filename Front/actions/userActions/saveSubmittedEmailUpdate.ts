"use server"

import { authOptions } from "@/auth/[...nextauth]";
import { setupGraphQLClient } from "@/lib/gqlclient";
import { UpdateUpdatedEmailDocument } from "@/src/gql/graphql";
import { getServerSession } from "next-auth"


export async function SaveSubmittedEmailUpdate(email: string) {
    const session = await getServerSession(authOptions)
    const gqlClient = await setupGraphQLClient();
    if(!session){
        return {
            error: 'Not Authenticated',
        };
    };

    try {
        const result = await gqlClient!.request( UpdateUpdatedEmailDocument, { id: session?.user.id, updated_email: email} );
        if(result.update_auth_user_by_pk != email){
            return {
                error: 'Internal Server Error',
            };
        }
    }
    catch (error) {
        return {
            error: 'Internal Server Error',
        };
    };
}