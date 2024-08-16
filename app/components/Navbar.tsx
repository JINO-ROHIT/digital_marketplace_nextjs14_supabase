import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <nav className='border-b bg-background h-[10vh] flex items-center'>
      <div className='container flex items-center justify-between'>

        <Link href='/'>
          <h1 className='font-bold text-3xl'> JinoSaaS</h1>
        </Link>

        <div className='flex items-center gap-5'>
        <ThemeToggle/>

        <div className='flex gap-5 items-center'>
          <Button>Sign In</Button>
          <Button variant='secondary'> Sign Up</Button>
          </div>
      
          </div>
      </div>
    </nav>
  )
}

export default Navbar
