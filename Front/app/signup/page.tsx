import React from 'react';
import dynamic from 'next/dynamic'
const NoSSRSkeleton = dynamic(() => import('./skeleton'), { ssr: false })


export default function Page() {
  return (
    <NoSSRSkeleton />
  );
}

