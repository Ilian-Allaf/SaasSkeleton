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
            <div style={{ marginTop: '6%', marginLeft: '2%', marginRight: '2%'}}>{children}</div>
        </EmailVerificationLayout>
      </SessionProvider>
    </>
  );
};

export default RootLayout;

