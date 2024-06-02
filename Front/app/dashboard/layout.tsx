'use client'
import "../globals.css";
import NavigationBar from '@/components/NavigationBar';
import { SessionProvider } from 'next-auth/react';
import EmailVerificationLayout from "./emailVerificationLayout";
import { Separator } from "@/components/ui/separator";

const RootLayout = ({ children }) => {
  return (
      <SessionProvider>
        <EmailVerificationLayout>
          <div className="">
            <NavigationBar />
            <Separator orientation='horizontal' className="" />
            <div className={''} style={{ marginTop: '4%', marginLeft: '2%', marginRight: '2%'}}>{children}</div>
          </div>
        </EmailVerificationLayout>
      </SessionProvider>
  );
};

export default RootLayout;

