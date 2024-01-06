import React from 'react'
import Skeleton from './skeleton'

export default function page({params}: {params: { token: string }}) {
  const token = params.token
  return (
    <Skeleton token={token}/>
  )
}