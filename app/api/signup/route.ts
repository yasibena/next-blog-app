import User from "@/app/models/User"
import connect from '@/app/utils/db'
import bcrypt from "bcryptjs"
import { NextResponse, NextRequest } from "next/server"

export const POST = async (request: NextRequest) => {
    const { email, password } = await request.json()

    await connect();

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        return new NextResponse("Email is already in use", {
            status: 400,
        })
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const newUser = new User({
        email,
        password: hashPassword,
    })

    try {
        await newUser.save(); return new NextResponse("User is registered", { status: 200 });
    } catch (err: any) {
        console.error('Error saving new user:', err);
        return new NextResponse(err.message || 'Internal Server Error', { status: 500 });
    }
}

