'use client'

import React from 'react'
import Image from "next/image";
import NavBar from './NavBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full mx-auto'>
            <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col text-white items-center'>
                        <h1 className='text-[50px] font-extrabold'>Ylenia Rossi</h1>
                        <h4 className='mb-2 text-[30px] font-light'>developer</h4>
                    </div>
                    <NavBar/>
            </div>
    </div>
    )
}

export default Hero