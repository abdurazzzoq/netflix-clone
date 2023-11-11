'use client'

import Login from '@/components/shared/Login';
import { useGlobalContext } from '@/context';
import React from 'react'
import {useSession} from 'next-auth/react'
import ManageAccount from '@/components/shared/ManageAccount';

const Page = () => {

  const {data: session} = useSession()

  const {account} = useGlobalContext();
  console.log(session);
  

  if(account === null) return <ManageAccount />
  if(session===null) return <Login/>

  return (
    <div>Page</div>
  )
}

export default Page