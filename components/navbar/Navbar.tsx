"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

interface NavLink {
    href?: string;
    name: string;
}

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => { setIsOpen(!isOpen); };

    const pathName = usePathname()

    const { data: session }: any = useSession()


    const baseLinks: NavLink[] = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ]

    //if user loged in dont show login and signup else show
    const getNavLinks = (): NavLink[] => {
        if (session) {
            return [
                ...baseLinks,
                { name: 'Logout' },
            ]

        }
        else {
            return [
                ...baseLinks,
                { name: 'Login', href: '/login' },
                { name: 'SignUp', href: '/signup' },
            ]
        }
    }


    const renderNavLinks = (isMobile: boolean) => {
        const navLinks = getNavLinks()
        return navLinks.map(({ href, name }, index) => {
            const isActive = pathName === href;
            const linkClass = isActive ? (isMobile ? 'text-white font-bold' : 'text-emerald-600 font-bold') : '';
            return (
                <li key={index} className={`py-2 ${linkClass} duration-200`}>
                    {
                        name == 'Logout' ?
                            <button onClick={() => signOut()} className='bg-emerald-200 p-2 rounded -mt-2 font-bold text-gray-950'>
                                Logout
                            </button>
                            :
                            <Link href={href || ''} onClick={() => setIsOpen(false)}>{name}</Link>
                    }
                </li>
            )
        })
    }

    return (
        <nav className='flex justify-between md:mx-20 mx-24 text-violet-50 my-10' >

            {/* logo left */}
            <div className='font-bold text-[1.5rem]'>
                YOUR BLOG
            </div>

            {/* menu right */}
            <div>
                <div>
                    <button data-collapse-toggle="navbar-defaul" className='md:hidden' onClick={toggleNavbar}>
                        <svg className="w-5 h-5 flex mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <ul className='hidden md:flex gap-8 text-[1.2rem]'>
                    {renderNavLinks(false)}
                </ul>
                {isOpen && (
                    <div className='absolute gap-1 bg-emerald-600 w-[7rem] p-5 rounded text-slate-950 font-bold md:hidden text-[1.2rem] flex'>
                        <ul>
                            {renderNavLinks(true)}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}
