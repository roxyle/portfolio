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
                        <h1 className='text-[50px] font-extrabold'><Link href='/'>Ylenia Rossi</Link></h1>
                        <span className="relative">
                                <span className="block absolute -inset-1 -skew-y-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" aria-hidden="true"></span>
                                <span className="relative text-white">developer</span>
  </span>
                    </div>
                    <NavBar/>
            </div>
    </div>
    )
}

export default Hero