import Skeleton from './skeleton'
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation'

export default async function page() {
  const session = await getServerSession(authOptions);  
  if(!session?.user.teamId)
  {
    redirect('create-team')
  }
  return (
    <>
      <Skeleton />
    </>
    
  )
}
