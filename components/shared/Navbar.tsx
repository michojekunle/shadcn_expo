"use client"

import * as React from "react"
import Link from "next/link"

import { ModeToggle } from "../theme-switch-btn"
import { Button } from "../ui/button"
import { signIn, useSession } from "next-auth/react";
import { LogOut } from "../custom/LogOut"
import { UserAvatar } from "../custom/UserAvatar"

export function Navbar() {
  const { data: session, status } = useSession();

  const handleSignIn = () => {
    signIn()
  }

  return (
    <div className="w-full bg-transparent backdrop-blur-2xl p-4 md:px-8 py-6">
      <div className="w-full flex justify-between">
        <div className='flex items-center gap-3 list-none'>
          <Link href='/'><Button>Home</Button></Link>
          <Link href='/todos'><Button variant='secondary'><span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Todos</span></Button></Link>
        </div>
        <div className="flex items-center gap-3">
          {status === 'authenticated' ? (
            <div className='flex items-center gap-3'>
              <UserAvatar url={session.user?.image!} name={session.user?.name!}/>
              <LogOut/>
            </div>
            ) : (
            <Button variant='outline' onClick={handleSignIn}><span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Sign In</span></Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}