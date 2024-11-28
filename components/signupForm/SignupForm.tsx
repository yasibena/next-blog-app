"use client"

import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function SignupForm() {

    const [error, setError] = useState("")
    const router = useRouter()
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

        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            if (res.status === 400) {
                setError("This email is already registered")
            }
            if (res.status === 200) {
                setError("")
                router.push("/login")
            }
        } catch (error) {
            setError("Error, try again")
            console.log(error);

        }


    }


    return (
        sessionStatus !=="authenticated" &&
        <form className='mx-auto mt-20 bg-emerald-600
         rounded w-[20rem] p-10 h-[25rem] 
         text-slate-950 flex flex-col gap-7 '
            onSubmit={handleSubmit}
        >
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
                    Sign up
                </button>

                {/* show error */}
           

            </div>
          <div>
          <p className='text-[#852828]  text-[16px] font-bold' mb-2>{error && error}</p>
          </div>
            <div className='m-auto font-bold '>
                <Link href='/login'>
                    Login with an existing account
                </Link>
            </div>

        </form>
    )
}
