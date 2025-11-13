import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black w-full flex p-3 justify-center items-center'>
        <div className="container w-[80%] flex justify-between">

            <div className="logo text-2xl text-white font-bold">Clerk</div>

            <ul className='flex gap-x-10'>
                <li className=' underline decoration-yellow-500 decoration-2'>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>

            <SignedOut>
                <SignInButton/>
            </SignedOut>

            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar