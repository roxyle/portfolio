import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-row flex-wrap justify-between z-10 pt-10'>
        <Link href='/About' className='hover:underline shadow-lg underline-offset-4 hover:shadow-blue-500/100 hover:text-[20px]'>About</Link>
        <Link href='/Projects' className='hover:underline shadow-lg underline-offset-4 hover:shadow-purple-500/100 hover:text-[20px]'>Projects</Link>
        <Link href='/Contact' className='hover:underline shadow-lg underline-offset-4 hover:shadow-green-500/100 hover:text-[20px]'>Contact</Link>

      </div>
    </div>
  )
}

export default NavBar