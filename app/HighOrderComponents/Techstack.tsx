'use client'
import React from 'react'
import ScrollVelocity from '../animations/ScrollVelocity'


const Techstack = () => {
    const images = [
        <div className="flex flex-row gap-24 h-32 mr-24">
            <img src="star.svg" className='p-8' alt="star" />
            <img src="react.svg" alt="Image 1" />
            <img src="star.svg" className='p-8' alt="star" />
            <img src="flutter.svg" className='p-4' alt="Image 3" />
            <img src="star.svg" className='p-8' alt="star" />
            <img src="kotlin.svg" className='p-4' alt="Image 5" />
        </div>,
    ];
    return (
        <div className="relative flex items-center justify-center h-40 md:h-60 overflow-hidden bg-[#2c45ad]">
            {/* Fade Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2c45ad]/50 via-transparent to-[#2c45ad]/50 z-10"></div>

            {/* Scroll Content */}
            <ScrollVelocity
                parallaxClassName='inline block'
                texts={images}
                velocity={-100}
                numCopies={12} 
                className="text-5xl font-bold text-white whitespace-nowrap"
            />
        </div>
    )
}

export default Techstack