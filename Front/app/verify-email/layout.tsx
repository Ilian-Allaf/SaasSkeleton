'use client'
import { SessionProvider } from 'next-auth/react';

const RootLayout = ({ children }) => {
  return (
    <>
      <SessionProvider>
          {children}
      </SessionProvider>
    </>
  );
};

export default RootLayout;
