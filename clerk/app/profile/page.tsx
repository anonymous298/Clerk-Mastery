"use client"

import React from 'react'
import { useUser } from '@clerk/nextjs'

const Page = () => {
    
    const {isSignedIn, user, isLoaded} = useUser()

  return (
    <>
        {!isLoaded && <h1>Loading...</h1>}

        <h1>Your Profile: {user?.firstName} {user?.lastName} | {user?.id}</h1>
    </>
  )
}

export default Page