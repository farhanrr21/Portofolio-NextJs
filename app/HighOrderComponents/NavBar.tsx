'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'


const navlink = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#project' },
    { label: 'Achievement', href: '#achievement' },
    { label: 'Contact', href: '#contact' },
]

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => {
        setNav(!nav)
    }
    const closeNav = () => {
        setNav(false)
    }

    // Function to handle scroll when link is clicked
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent default link behavior (page refresh)
        const targetId = e.currentTarget.getAttribute('href')?.substring(1); // Get the section id from href
        const targetSection = document.getElementById(targetId!); // Find the target section by ID

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Scroll smoothly
                block: 'start',     // Align at the top of the section
            });
        }
    };

    return (
        <nav className='w-full text-white bg-black/20 fixed top-0 z-20 backdrop-blur-md rounded-bl-xl rounded-br-xl shadow-xl'>
            {/* Desktop */}
            <div className='hidden md:flex py-4 items-center justify-between mx-auto max-w-7xl'>
                <Image
                    height={100}
                    width={100}
                    src={'/porto_logo.svg'}
                    alt='logo'
                />

                <ul className="flex flex-row p-4 gap-10 text-xl font-medium">
                    {navlink.map((link, index) => (
                        <li className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black px-4 py-2 rounded-full" key={index}>
                            <a href={link.href} onClick={handleLinkClick}>
                                <p>{link.label}</p>
                            </a>
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

                <div onClick={toggleNav} className='mr-5 z-50 text-white'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={nav ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, y: 0, transition: { stiffness: 10, damping: 15, restDelta: 2 } },
                        closed: { opacity: 0, y: "-100%", transition: { stiffness: 10, damping: 15, restDelta: 2 } },
                    }}
                    className='fixed left-0 top-0 w-full h-screen z-40 bg-gray-700 backdrop-blur-lg'
                >
                    <ul className='text-3xl font-semibold text-center my-18 space-y-6 select-none'>
                        {navlink.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} onClick={(e) => { handleLinkClick(e); closeNav(); }}>
                                    <p>{link.label}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </nav>
    )
}

export default NavBar
