import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Button } from '@/components/ui/button'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {

  const {isAuthenticated} = getKindeServerSession();
  return (
    <nav className='border-b bg-background h-[10vh] flex items-center'>
      <div className='container flex items-center justify-between'>

        <Link href='/'>
          <h1 className='font-bold text-3xl'> JinoSaaS</h1>
        </Link>

        <div className='flex items-center gap-5'>
          <ThemeToggle />
          
          {await isAuthenticated() ?
            <LogoutLink><Button>Log Out</Button></LogoutLink>
            :
          <div className='flex gap-5 items-center'>             
            <LoginLink><Button>Sign In</Button></LoginLink>
            <RegisterLink><Button variant='secondary'> Sign Up</Button></RegisterLink>
          </div> 
          }
      
          </div>
      </div>
    </nav>
  )
}