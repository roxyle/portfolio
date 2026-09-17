'use client'

import React from 'react'
import Image from "next/image";
import NavBar from './NavBar'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mx-auto'>
        <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col text-white items-center'>
                        <Link href='/'>
                                <div className='flex flex-row items-center justify-center py-2'>
                                        <Image src='/home.svg' alt='home' className='mr-2' width={50} height={50}/>
                                        <h1 className='text-[50px] font-extrabold'>
                                                Ylenia Rossi
                                        </h1>                                
                                </div>
                        </Link>
                                <span className="relative inline-block mt-2">
    <span
        className="block absolute -inset-x-4 -inset-y-2 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        aria-hidden="true"
    ></span>

    <span className="relative text-white whitespace-nowrap">
        Technical Documentation Writer
        <span className="mx-3 opacity-70">•</span>
        AI Product Builder
    </span>
</span>
                </div>
                        <NavBar/>
        </div>
    </div>
    )
}

export default Hero