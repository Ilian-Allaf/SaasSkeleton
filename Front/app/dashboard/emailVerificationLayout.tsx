// components/Layout.js
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from "lucide-react"

const EmailVerificationLayout = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user && !session.user.active) {
      router.push('/verify-email');
    }
  }, [session, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-10 w-10 animate-spin" />
      </div>
    );
  }

  return <div>{children}</div>;
};

export default EmailVerificationLayout;
