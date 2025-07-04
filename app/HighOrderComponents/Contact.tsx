'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoMdSend, IoMdCheckmark } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import Particles from '../animations/Particles/Particles';
import emailjs from 'emailjs-com'; // Import EmailJS
import Link from 'next/link';

const Contact = () => {
    // State for form data
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formParams = {
            email: email,
            subject: subject,
            message: message
        }

        // Access environment variables
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '';
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';

        // Simple form validation
        if (email && subject && message) {
            console.log(e.target as HTMLFormElement);
            // Send email using EmailJS
            emailjs.send(
                serviceID,
                templateID, // Replace with your template ID
                formParams,           // Form data // Replace with your EmailJS user ID
                userID
            )
                .then((result) => {
                    console.log('Email sent successfully', result.text);
                    setIsSubmitted(true);
                    // Reset form fields
                    setEmail('');
                    setSubject('');
                    setMessage('');
                })
                .catch((error) => {
                    console.log('Error sending email:', error.text);
                });

            // Hide success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }
    };

    return (
        <section id='contact' className='relative h-screen bg-gradient-to-b flex items-center from-[#22387B] to-[#3E66E1] px-42 py-24'>

            <div className='absolute inset-0 z-0'>
                <div className='absolute inset-0 z-1 bg-gradient-to-b from-[#22387B] via-transparent to-[#3E66E1]'></div>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={5}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>



            <div className='h-full w-full mx-auto flex flex-row bg-white shadow-xl rounded-2xl shadow-black/30 z-10'>
                <div className='relative h-full w-2/3'>
                    {/* Success Message */}
                    {isSubmitted && (
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-green-500 bg-white px-4 py-2 rounded-md'>
                            <div className='flex justify-center items-center p-2 bg-green-100 rounded-full'>
                                <IoMdCheckmark className='text-2xl text-green-500' size={50} />
                            </div>
                            <p className='text-center'>Your message has been <br /> sent successfully!</p>
                        </div>
                    )}

                    {/* Image */}
                    <Image
                        src={'images/contact_gradient.svg'}
                        alt='cover'
                        width={550}
                        height={500}
                        className='h-full rounded-tl-2xl rounded-bl-2xl object-cover'
                    />
                </div>



                <div className='flex flex-col w-full h-full rounded-tr-2xl rounded-br-2xl px-8 py-6 font-semibold gap-6'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl text-gray-400 font-light'>Are you interested?</h2>
                        <h1 className='text-5xl text-[#22387B] font-mono'>Contact Me</h1>
                    </div>

                    <form id="contacts" onSubmit={handleSubmit} className='space-y-6 flex-grow'>
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className='text-lg text-gray-500 font-medium'>E-mail</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium'
                                required
                            />
                        </div>
                        {/* Subject Input */}
                        <div>
                            <label htmlFor="subject" className='text-lg text-gray-500 font-medium'>Subject</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium'
                                required
                            />
                        </div>
                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className='text-lg text-gray-500 font-medium'>Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium resize-none'
                                rows={5}
                                required
                            />
                        </div>
                    </form>

                    {/* Submit Button and Social Media Icons */}
                    <div className='flex items-center justify-between mt-auto'>
                        <div>
                            <ol className='flex flex-row gap-5'>
                                <li>
                                    <Link href='https://www.linkedin.com/in/farhanrr/'>
                                        <FaLinkedin size={40} className='text-blue-600' />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.instagram.com/farhanrr._/'>
                                        <FaInstagram size={40} className='text-blue-600' />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://github.com/farhanrr21'>
                                        <FaGithub size={40} className='text-blue-600' />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://wa.me/6289526384701'>
                                        <FaWhatsapp size={40} className='text-blue-600' />
                                    </Link>
                                </li>
                            </ol>
                        </div>
                        <button
                            type="button"
                            className='px-6 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all font-medium'
                            onClick={() => {
                                const form = document.getElementById("contacts") as HTMLFormElement | null;
                                form?.requestSubmit();
                            }}

                        >
                            <div className='flex flex-row items-center justify-center gap-4'>
                                <h1>Send Message</h1>
                                <IoMdSend />
                            </div>
                        </button>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Contact;
