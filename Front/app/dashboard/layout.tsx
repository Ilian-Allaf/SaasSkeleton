'use client'
import "../globals.css";
import NavigationBar from '@/components/NavigationBar';
import { SessionProvider } from 'next-auth/react';
import EmailVerificationLayout from "./emailVerificationLayout";

const RootLayout = ({ children }) => {
  return (
    <>
      <SessionProvider>
        <EmailVerificationLayout>
            <NavigationBar />
            {children}
        </EmailVerificationLayout>
      </SessionProvider>
    </>
  );
};

export default RootLayout;
