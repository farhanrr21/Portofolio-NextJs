'use client'
import React from 'react'
import Image from 'next/image'
import ShaderGrad from './ShaderGrad'
import RotatingText from '../animations/RotatingText'
import { CiShare1 } from 'react-icons/ci'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'

const Hero = () => {
    return (
        
        <section className='absolute top-0 w-full h-screen z-0'>
            <ShaderGradientCanvas
                pointerEvents='none'
                style={{
                    position: 'absolute',
                    top: 0,
                    zIndex: -1,
                    height: '150%',
                    animation: 'ease-in'
                }}
            >
                <ShaderGradient
                    control='query'
                    urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23802932&color2=%23dd828a&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=2&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.1&uStrength=1.5&uTime=8&wireframe=false'
                />
            </ShaderGradientCanvas>
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


                <button className='flex flex-row gap-4 items-center my-12 text-center font-medium bg-white text-black rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 px-8 py-4 shadow-xl shadow-black/55'>
                    <span className='font-geist text-2xl'>Get in touch</span>
                    <CiShare1 size={24}></CiShare1>
                </button>
            </div>
        </section>
    )
}

export default Hero