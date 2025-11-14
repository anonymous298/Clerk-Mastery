import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black w-full flex p-3 justify-center items-center'>
        <div className="container w-[80%] flex justify-between items-center">

            <div className="logo text-2xl text-white font-bold">Clerk</div>

            <ul className='flex gap-x-10'>
                <li className=' underline decoration-yellow-500 decoration-2 cursor-pointer hover:text-yellow-300 transition-all'>Home</li>
                <Link href='/create-blog' className=' cursor-pointer hover:text-yellow-300 transition-all'>Create Blog</Link>
                <SignedIn>
                    <li className=' cursor-pointer hover:text-yellow-300 transition-all'>Profile</li>
                </SignedIn>
            </ul>

            <SignedOut>
                <SignInButton>
                    <button className='bg-pink-500 p-2 rounded-xl cursor-pointer transform hover:scale-105'>Sign In</button>
                </SignInButton>
            </SignedOut>

            <SignedIn> 
                <UserButton/>
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar