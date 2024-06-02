"use server"

import { setupGraphQLClient } from "@/lib/gqlClient";
import { UpdateUsernameDocument } from "@/src/gql/graphql";
import { getServerSession } from "next-auth"
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prismaClient";
import validator from "validator";
import { useTranslation } from '@/i18n/index'


export async function UpdateUsername(newUsername: string) {
    const { t } = await useTranslation('settings')
        const session = await getServerSession(authOptions)
        const gqlClient = await setupGraphQLClient();

        if(!session){
            console.error('Not Authenticated');
            const obj = {
                message: 'Not Authenticated',
            };
            throw Error(JSON.stringify(obj));
        };

        //Validate newUsername
        if(!validator.isAlphanumeric(newUsername) || newUsername.length > 20) {
            const obj = {
                message: 'Special characters are not allowed in username',
                field: 'username'
            };
            throw Error(JSON.stringify(obj));
        }
        
        const existingUser = await prisma.user.findFirst({
            where: {
                username: newUsername ,
            },
          });

        if (existingUser) {
            const obj = {
                message: t('general.username-taken'),
                field: 'username'
            };
            throw Error(JSON.stringify(obj));
        }
        const result = await gqlClient!.request( UpdateUsernameDocument, { id: session?.user.id, username: newUsername} );
        if (result.update_auth_user_by_pk?.username === null) {
            console.error('Error updating username with gql');
            const obj = {
                message: 'Internal Server Error',
            };
            throw Error(JSON.stringify(obj));
        }
        revalidatePath('/dashboard/settings');
}