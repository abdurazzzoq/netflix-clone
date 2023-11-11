import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import {BsGithub} from 'react-icons/bs'
import {signIn} from 'next-auth/react'

const Login = () => {
  return (
    <div className='w-full h-screen'>
        <div className="absolute inset-0">
            <Image src={'https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4'} alt='bg' fill/>
        </div>

        <div className="relative h-[50vh] rounded-lg bg-black/60 z-10 w-[500px] left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 px-8 py-4">

            <div className="flex items-center justify-center flex-col h-full">

        <h1 className='text-4xl font-bold'>Login</h1>
        <Button className='mt-4 flex items-center gap-2 w-full h-[56px] bg-red-600 hover:bg-red-500 !text-white' 
        onClick={()=>signIn('github')}
        >Sign in with Github 
        <BsGithub className='w-7 h-6'/> 
        </Button>
            </div>
        </div>
        
        </div>
  )
}

export default Login