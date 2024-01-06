// components/Layout.js
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const EmailVerificationLayout = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user && !session.user.active) {
      router.push('/verify-email');
    }
  }, [session, router]);

  if (status === 'loading') {
    return <p>Vérification en cours...</p>;
  }

  return <div>{children}</div>;
};

export default EmailVerificationLayout;
