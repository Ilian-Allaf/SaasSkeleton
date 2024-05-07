import React from 'react'
import dynamic from 'next/dynamic'
const NoSSRSkeleton = dynamic(() => import('./skeleton'), { ssr: false })


export default function page({params}: {params: { token: string }}) {
  const token = params.token
  return (
    <NoSSRSkeleton token={token}/>
  )
}