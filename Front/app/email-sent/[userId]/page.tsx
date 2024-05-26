import Skeleton from './skeleton'
import { prisma } from '@/lib/prismaClient';

export default async function page({params}) {
  const userId = params.userId;
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });

 // TODO: Fixe hydration issue
  return (
    <>
      <Skeleton email={user?.email} userId={userId}/>
    </> 
  )
}