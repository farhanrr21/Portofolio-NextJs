'use client'
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import SpotlightCard from '../animations/SpotlightCard'

const Achievement = () => {
    return (
        <section id='achievement' className='h-screen relative bg-gradient-to-b from-[#0A132F] via-20% via-[#0A132F] to-[rgb(34,56,123)] px-8 md:px-18 2xl:px-32 py-28'>
            {/* Content  */}


            {/* Content */}
            <div className='grid grid-cols-1 md:grid-cols-2 h-full w-full gap-16 px-16 items-center'>
                <SpotlightCard className="w-full h-full flex flex-col gap-4 2xl:gap-5" spotlightColor="rgba(255, 255, 255, 0.1)">
                    <div className='h-1/2 w-auto rounded-xl overflow-hidden mb-4'>
                        <img
                            src={'images/vhack.png'}
                            height={500}
                            width={500}
                            alt='logo'
                            className='object-cover h-full w-full'
                        />
                    </div>
                    <h1 className='text-4xl font-medium text-white'>
                        Top 20 Finalist Hackaton
                    </h1>
                    <div className='flex flex-row gap-4 items-center'>
                        <CiLocationOn
                            size={40}
                            color='red'
                        />
                        <h2 className='text-white text-xl font-light 2xl:text-xl'>Universiti Sains Malaysia, Penang</h2>
                    </div>

                    <p className='text-white/40 font-light 2xl:text-xl'>
                        Competed in a highly competitive hackathon, where my team and I developed an innovative solution, earning a spot among the top 20 finalists.
                    </p>
                </SpotlightCard>

                <SpotlightCard className="w-full h-full flex flex-col gap-4 2xl:gap-5" spotlightColor="rgba(255, 255, 255, 0.1)">
                    <div className='h-1/2 w-auto rounded-xl overflow-hidden mb-4'>
                        <img
                            src={'images/fordigi.jpg'}
                            height={500}
                            width={500}
                            alt='logo'
                            className='object-cover h-full w-full'
                        />
                    </div>
                    <h1 className='text-4xl font-medium text-white'>
                        2nd Place Fordigi Hackathon
                    </h1>
                    <div className='flex flex-row gap-4 items-center'>
                        <CiLocationOn
                            size={40}
                            color='red'
                        />
                        <h2 className='text-white text-xl font-light 2xl:text-xl'>Universitas Gadjah Mada, Yogyakarta</h2>
                    </div>
                    <p className='text-white/40 font-light 2xl:text-xl'>
                        Secured second place in the Fordigi Hackathon, showcasing our team&apos;s ability to create a valuable, real-world solution under time constraints.
                    </p>
                </SpotlightCard>
            </div>

        </section>
    )
}

export default Achievement

