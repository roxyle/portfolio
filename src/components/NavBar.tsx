import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-row flex-wrap justify-between z-10 pt-10'>
        <Link href='/' className='hover:underline shadow-lg underline-offset-4 hover:shadow-blue-500/100'>Home</Link>
        <Link href='/About' className='hover:underline shadow-lg underline-offset-4 hover:shadow-violet-500/100'>About</Link>
        <Link href='/Projects' className='hover:underline shadow-lg underline-offset-4 hover:shadow-pink-500/100'>Projects</Link>
        <Link href='/Contact' className='hover:underline shadow-lg underline-offset-4 hover:shadow-orange-500/100 hover:upperline upperline-offset-4'>Contact</Link>

      </div>
    </div>
  )
}

export default NavBar