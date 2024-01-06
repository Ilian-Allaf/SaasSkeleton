import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prismaclient';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import { isPasswordValid } from '@/utils/passwordCheck'
import domains from 'disposable-email-domains';
import { sendVerificationEmail } from '@/utils/sendEmail';
import { signIn } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  
  const { username, password, email } = req.body;
  const domain = email.split("@")[1];
  
  if (!username || !password || !email){
    return res.status(422).json({ message: 'You need to fill every fields', field: 'all' });
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { username: username },
        ],
      },
    });

    if (existingUser) {
      if(existingUser.email == email){
        return res.status(409).json({ message: 'Email already taken', field: 'email' });
      }

      if(existingUser.username == username){
        return res.status(409).json({ message: 'Username already taken', field: 'username' });
      }
    }

    if (!validator.isEmail(email) || domains.includes(domain) || email.includes('+') || email.lenght > 100){
      return res.status(422).json({ message: 'Invalid Email', field: 'email' });
    }
  
    if(!validator.isAlphanumeric(username) || username.lenght > 20) {
      return res.status(422).json({ message: 'Special characters are not allowed in username', field: 'username' });
    }
  
    if(!isPasswordValid(password)) {
      return res.status(422).json({ message: 'Password is too weak', field: 'password' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({
        data: {
          username: username,
          email: email,
          password: hashedPassword,
        },
      });
    
    await sendVerificationEmail({email: createdUser.email, userId: createdUser.id, prisma: prisma})

    await prisma.$disconnect()
    
    
    if (createdUser.id) {
      res.status(200).json({ message: 'Sign-up successful' });
    } else {
      res.status(500).json({ message: 'Sign-up failed' });
    }
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}