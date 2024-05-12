import React from 'react'
import {Menu} from 'lucide-react'
import AvatarComponent from './Avatat'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import {signIn,signOut,useSession} from "next-auth/react"


  


const  Login=()=> {
  const {data:session}=useSession();
  console.log("session++++++",session)
  return (
  <DropdownMenu>
   <DropdownMenuTrigger>
             <div className="flex p-2 border-solid border-[1px] rounded-full items-center gap-2 hover:shadow-xl">
              <Menu/>
              {
                session && session.user?(
                  <Image src={session.user.image} alt="login-user-image" width={32} height={32}></Image>
                ):<AvatarComponent/>
              }

              
              </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='right-[-30px] bg-white border-solid border-[1px] border-gray-200 rounded shadow-lg'>
    {session?
    (<DropdownMenuItem onClick={()=>signOut({
      callbackUrl:"http://localhost:3000"
    })}>Sign Out</DropdownMenuItem>)
    :( <DropdownMenuItem 
    onClick={()=>signIn('google',{callbackurl:'http://localhost:3000'})}>Log in</DropdownMenuItem>)}
   
    <DropdownMenuItem>Sign up</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Airbnb your Home</DropdownMenuItem>
    <DropdownMenuItem>Help Center</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default Login