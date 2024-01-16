import React from 'react'
import Skeleton from './skeleton'

export default async function page() {
  const last4digits = '4242'
  return (
    <Skeleton last4digits={last4digits}/>
  )
}