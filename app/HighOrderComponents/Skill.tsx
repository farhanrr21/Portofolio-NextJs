'use client'
import React from 'react'
import ScrollVelocity from '../animations/ScrollVelocity'
import Image from 'next/image'


const Skill = () => {
    const images = [
    <div className="flex flex-row items-center gap-24 mr-24" key="image-1">
        <Image src="images/flower.svg" height={40} width={40} alt="star" />
        <h1>Mobile Developer</h1>
        <Image src="images/flower.svg" height={40} width={40} alt="star" />
        <h1>Software Engineer</h1>
        <Image src="images/flower.svg" height={40} width={40} alt="star" />
        <h1>UI/UX Enthusiast</h1>
        <Image src="images/flower.svg" height={40} width={40} alt="star" />
        <h1>Backend Developer</h1>
    </div>,
];

return (
    <div className="relative flex items-center justify-center h-40 md:h-60 overflow-hidden bg-[#BE3144]">
        {/* Fade Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#BE3144]/70 via-transparent to-[#BE3144]/70 z-10"></div>
        {/* Scroll Content */}
        <ScrollVelocity
            parallaxClassName="inline block"
            texts={images}
            velocity={100}
            numCopies={12}
            className="text-5xl font-bold text-white whitespace-nowrap"
        />
    </div>
);

}

export default Skill