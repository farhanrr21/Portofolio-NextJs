'use client'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='bg-[#1A2A5B] h-30'>
            <div className='flex flex-row px-16 2xl:px-24 h-full items-center justify-between text-white'>
                <Image
                    height={100}
                    width={100}
                    src={'images/porto_logo.svg'}
                    alt='logo'
                />
                <p>
                    Made with ❤️ by <span className='font-bold'>Farhan Ryan Rafli</span>
                </p>
            </div>

        </footer>
    )
}

export default Footer