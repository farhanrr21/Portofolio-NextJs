'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { motion } from 'framer-motion'

const navlink = [
    { title: 'Home', path: '#' },
    { title: 'About', path: '#' },
    { title: 'Projects', path: '#' },
    { title: 'Achievement', path: '#' },
    { title: 'Contact', path: '#' },
]

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => {
        setNav(!nav)
    }
    const closeNav = () => {
        setNav(false)
    }

    return (
        <nav className='w-full text-white fixed top-0 z-20 backdrop-blur-md rounded-bl-xl rounded-br-xl shadow-xl'>
            {/* Desktop */}
            <div className='hidden md:flex py-4 items-center justify-between mx-auto max-w-7xl'>
                <Image
                    height={100}
                    width={100}
                    src={'/porto_logo.svg'}
                    alt='logo'
                />

                <ul className='flex flex-row p-4 gap-10 text-xl font-medium'>
                    {navlink.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <p>{link.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Smartphone */}
            <div className='md:hidden flex items-center justify-between mx-auto py-4'>
                <Image
                className='ml-5'
                    height={60}
                    width={60}
                    src={'/porto_logo.svg'}
                    alt='logo'
                />

                <div onClick={toggleNav} className='mr-5 z-50  text-white'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                <motion.div
                    initial={false}
                    animate={nav ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, y: 0, transition: { stiffness: 10, damping: 15, restDelta: 2 } },
                        closed: { opacity: 0, y: "-100%", transition: { stiffness: 10, damping: 15, restDelta: 2 } },
                    }}
                    className='fixed left-0 top-0 w-full z-40 bg-gray-700 backdrop-blur-lg'
                >
                    <ul className='text-3xl font-semibold text-center my-18 space-y-6 select-none'>
                        {navlink.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path} onClick={closeNav}>
                                    <p>{link.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>


        </nav>
    )
}

export default NavBar