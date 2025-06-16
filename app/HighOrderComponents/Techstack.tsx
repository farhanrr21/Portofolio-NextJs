'use client'
import React from 'react'
import ScrollVelocity from '../animations/ScrollVelocity'
import Image from 'next/image'


const Techstack = () => {

    const images = [
        <div className="flex flex-row h-32 " key="techstack">
            <Image src="images/star.svg" className="p-8" alt="star" width={500} height={500} />
            <Image src="images/react.svg" alt="Image 1" width={500} height={500} />
            <Image src="images/star.svg" className="p-8" alt="star" width={500} height={500} />
            <Image src="images/flutter.svg" className="p-4" alt="Image 3" width={500} height={500} />
            <Image src="images/star.svg" className="p-8" alt="star" width={500} height={500} />
            <Image src="images/kotlin.svg" className="p-4" alt="Image 5" width={500} height={500} />
        </div>,
    ];

    return (
        <div className="relative flex items-center justify-center h-40 md:h-60 overflow-hidden bg-[#2c45ad]">
            {/* Fade Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2c45ad]/50 via-transparent to-[#2c45ad]/50 z-10"></div>

            {/* Scroll Content */}
            <ScrollVelocity
                parallaxClassName="inline block"
                texts={images}
                velocity={-100}
                numCopies={12}
                className="text-5xl font-bold text-white whitespace-nowrap"
            />
        </div>
    );

}

export default Techstack