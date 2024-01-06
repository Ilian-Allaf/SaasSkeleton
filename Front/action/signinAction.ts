'use server'

import { signIn } from 'auth';


   
export async function credentialsSignInAction(email: string, password: string) {
    const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl: '/',
      })

    console.log(result)
    return result
}

export async function googleSignInAction() {
  await signIn('google')
}