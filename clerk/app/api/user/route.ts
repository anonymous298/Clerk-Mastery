import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET() {
    const {userId} = await auth()

    if (!userId) {
        return NextResponse.json({status : 'Sign-In first to access this'})
    }

    const user = await currentUser()

    if (!user) {
        return NextResponse.json({status : 'User not exist'})
    }

    return NextResponse.json({user: user})
}