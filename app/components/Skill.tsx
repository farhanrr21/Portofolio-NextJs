'use client'
import React from 'react'
import ScrollVelocity from '../animations/ScrollVelocity'


const Skill = () => {
    return (
        <div className="relative flex items-center justify-center h-40 md:h-60 overflow-hidden bg-[#BE3144]">
            {/* Fade Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#BE3144]/70 via-transparent to-[#BE3144]/70 z-10"></div>

            {/* Scroll Content */}
            <ScrollVelocity
            parallaxClassName='inline block'
                texts={['Software Engineer  |  Front-End Developer  |  Back-End Developer  |  ']}
                velocity={100}
                className="text-5xl font-bold text-white whitespace-nowrap"
            />
        </div>
    )
}

export default Skill