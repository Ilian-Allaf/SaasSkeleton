'use client';
import NavigationBar from '@/components/NavigationBar';
import { Separator } from '@/components/ui/separator';
import { SessionProvider } from 'next-auth/react';
import '../globals.css';
import EmailVerificationLayout from './emailVerificationLayout';

const RootLayout = ({ children }) => {
  return (
    <SessionProvider>
      <EmailVerificationLayout>
        <div className="">
          <NavigationBar />
          <Separator orientation="horizontal" className="mb-8" />
          <div className="container">{children}</div>
        </div>
      </EmailVerificationLayout>
    </SessionProvider>
  );
};

export default RootLayout;
