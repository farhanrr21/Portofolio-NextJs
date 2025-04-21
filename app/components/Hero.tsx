import React from 'react'
import Image from 'next/image'
import ShaderGrad from './ShaderGrad'
import RotatingText from '../animations/RotatingText'

const Hero = () => {
    return (
        
        <section className='absolute top-0 w-full h-screen z-0'>
            <ShaderGrad />
            <div className='hidden md:flex absolute inset-0 flex-col justify-center items-start max-w-7xl mx-auto text-white '>
                <h1 className='font-sans text-4xl my-4'>
                    I'm here to help turn your ideas
                </h1>
                <div className='flex flex-row min-h-24'>
                    <h1 className='font-sans text-7xl'>
                        Into 
                    </h1>
                    <RotatingText
                        texts={['an Inspiring Product', 'an Innovative Apps', 'a Robust Software', 'an Amazing Service', 'an Elegant Design']}
                        mainClassName="text-7xl font-sans font-bold mx-4"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                </div>


                <button className='flex flex-row gap-4 items-center my-12 text-center font-medium bg-[#872341] rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 px-8 py-4 shadow-xl shadow-black/55'>
                    <span className='font-geist text-2xl'>Get in touch</span>
                    <Image src="/vercel.svg" alt="arrow" width={24} height={24} />
                </button>
            </div>
        </section>
    )
}

export default Hero