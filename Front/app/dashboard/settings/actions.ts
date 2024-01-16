"use server"

import { setupGraphQLClient } from "@/lib/gqlclient";
import { UpdateUsernameDocument } from "@/src/gql/graphql";
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { revalidatePath } from "next/cache";


export async function UpdateUsername(newUsername: string) {
    const session = await getServerSession(authOptions)
    const gqlClient = await setupGraphQLClient();
    const result = await gqlClient!.request( UpdateUsernameDocument, { id: session?.user.id, username: newUsername} );
    // revalidatePath('/dashboard/settings');
    return result;
}
