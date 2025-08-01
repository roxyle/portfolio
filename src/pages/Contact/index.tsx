import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'
import Image from 'next/image';
  

const Contact = () => {
  return (
    <>
    <Hero/>
    <section className='max-w-5xl mx-auto sm:p-8 pb-6 px-4'>

      <div className='flex flex-col gap-3 text-white'>
        <p className='py-4 text-center border border-x-transparent border-y-pink-500'> 
        If I have captured your attention or if you'd like to have a chat, you can contact me here:</p>
      </div>

      
        <div className='py-4'>          
          <p className='flex justify-center text-white'><strong>ylenia.rossi@outlook.com</strong></p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <Image src='/teamwork.gif' alt='help me help you' width={300} height={300} />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact