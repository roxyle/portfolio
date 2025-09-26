import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'
import Image from 'next/image';
  

const Contact = () => {
  return (
    <>
    <Hero/>
    <div className='flex flex-col items-center px-4 md:px-8 '>
        <div className='max-w-3xl border border-x-transparent border-y-pink-500 p-5'>
        <p className='py-4 text-center'> 
        If I have captured your attention or if you'd like to have a chat, you can contact me here:</p>
      </div>

      
        <div className='py-4'>          
          <p className='flex justify-center text-white'><strong>ylenia.rossi@outlook.com</strong></p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Image src='/teamwork.gif' alt='help me help you' width={300} height={300} />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact