'use server'

import { signOut } from 'auth';


   
export async function signOutAction() {  
    signOut()
}