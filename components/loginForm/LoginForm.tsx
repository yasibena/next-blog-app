"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { signIn, useSession } from 'next-auth/react'

export default function LoginForm() {

    const router = useRouter()
    const [error, setError] = useState("")
    const { data: session, status: sessionStatus } = useSession()

    //if user loged in previosuly automaticly go to blog page
    useEffect(() => {
        if (sessionStatus == "authenticated") {
            router.replace("/blog")
        }
    }, [sessionStatus, router])

    const isValidEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/i
        return emailRegex.test(email)
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value

        if (!isValidEmail(email)) {
            setError("Email is invalid")
            return;
        }

        if (!password || password.length < 8) {
            setError("Password is invalid")
            return;
        }

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password
        })

        if (res?.error) {
            setError("Invalid email or password")
            if (res?.url) router.replace("/blog")
        } else {
            setError("")
        }
    }

    if(sessionStatus=="loading"){
       return <h1 className='flex justify-center align-middle'>Loading...</h1>
    }


    return (
       sessionStatus !== "authenticated" &&
       <form className='mx-auto mt-20 bg-emerald-600 rounded w-[20rem] p-10 h-[25rem] text-slate-950 flex flex-col gap-7 ' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <label className='font-bold mb-1'>
                    Email:
                </label>
                <input type='email' className='border-none w-[15rem] p-1 rounded focus:outline-none' />
            </div>
            <div className='flex flex-col'>
                <label className='font-bold mb-1'>
                    Password:
                </label>
                <input type='password' className='border-none w-[15rem] p-1 rounded focus:outline-none' />
            </div>

            <div className='flex justify-center font-bold cursor-pointer text-emerald-600 m-auto bg-slate-950 rounded w-[15rem]
             px-4 py-2 hover:bg-slate-800'>
                <button>
                    Login
                </button>
            </div>

            <div className='m-auto font-bold '>
                <Link href='/signup'>
                    You haven't sign in yet?
                </Link>
            </div>
        </form>
    )
}
