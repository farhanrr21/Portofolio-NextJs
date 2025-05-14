'use client'
import React from 'react'
import { Afacad, Actor } from 'next/font/google'
import Image from 'next/image'
import GradientText from '../animations/GradientText'
import SpotlightCard from '../animations/SpotlightCard'
import { FiCodesandbox, FiSlack } from 'react-icons/fi'
import { motion } from 'framer-motion'



const afacade = Afacad({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })
const actor = Actor({ weight: '400', subsets: ["latin"] })

const About = () => {
    return (
        <section id='about' className='hidden md:flex relative h-screen bg-gradient-to-b from-[#09122C] via-[#09122C] to-[#10204F] px-8 md:px-18 justify-around select-none'>
            <div className='grid grid-cols-2 items-center h-full'>

                {/* Content#1 */}
                <motion.div
                    initial={{ opacity: 0, x: "-100%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        stiffness: 20,
                        damping: 10
                    }}

                    className={`flex flex-col items-baseline  ${afacade.className} font-medium z-5`}>
                    <h1 className='text-4xl text-gray-500 '>My Name is</h1>
                    <h1 className='text-7xl text-white'>Farhan Ryan Rafli</h1>
                    <div className='bg-white h-3 my-14 w-1/4' />
                    <div className={`${actor.className} text-white/60 text-xl font-light w-1/2`}>
                        <p>Enthusiastic computer engineer, self-motivated with high creativity skills, and someone who likes problem solving.
                            <br /><br />
                            Experienced in several organizations that can create good cooperation between teams. Have an interest as a developer, especially in the field of mobile app development, software engineering, and UI UX. </p>
                    </div>
                </motion.div>

                {/* Content#2 */}
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        duration: 1,
                        stiffness: 20,
                        damping: 10
                    }}
                    className={`flex flex-col items-center justify-center ml-64  ${afacade.className} font-medium z-5`}>
                    <div
                        className='mb-10'>
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={10}
                            showBorder={false}
                            className="text-6xl"
                        >
                            Services
                        </GradientText>
                    </div>
                    <div
                        className='grid grid-cols-1 gap-4 '>
                        <SpotlightCard className="w-100 h-60 flex flex-col gap-3" spotlightColor="rgba(255, 255, 255, 0.1)">
                            <FiCodesandbox
                                className='text-8xl'
                                color="#FFFFFF"
                                size={60}
                            />
                            <h1 className='text-white text-3xl'>
                                Build an App
                            </h1>
                            <p className='text-white/40 font-light'>I have experience through several projects in mobile app development using Flutter.</p>
                        </SpotlightCard>
                        <SpotlightCard className="w-100 h-60flex flex-col gap-3" spotlightColor="rgba(255, 255, 255, 0.1)">
                            <FiSlack
                                className='text-8xl'
                                color="#FFFFFF"
                                size={60}
                            />
                            <h1 className='text-white text-3xl'>
                                Service to Support
                            </h1>
                            <p className='text-white/40 font-light'>Provide comprehensive backend solutions as mobile apps often rely on data storage, authentication, etc.</p>
                        </SpotlightCard>
                    </div>
                </motion.div>

            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    duration: 1,
                    stiffness: 20,
                    damping: 10
                }}
                className='absolute inset-0 flex items-center justify-center'>
                <Image className='w-sm md:w-md h-auto z-0'
                    src="/about_bg.png"  // Path to image inside the public folder
                    alt="Logo"
                    width={494}       // Width original
                    height={725}       // Height Original   
                />
            </motion.div>


        </section>
    )
}

export default About