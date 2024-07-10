import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'

const Contact = () => {
  return (
    <>
    <Hero/>
    <section className='max-w-5xl mx-auto sm:p-8 pb-6 px-4'>
      
      <h1 className='head-text flex justify-center'>
      Contacts...
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-white'>
        <p className='py-4 text-center border border-x-transparent border-y-sky-600'> 
        If I have captured your attention or if you'd like to have a chat, you can contact me here:</p>
      </div>

      
      
        <h2 className='py-8 head-text flex justify-center'>
            <span className="relative text-white">Email:</span>
        </h2>

        <div className='mt-5 flex justify-center text-white'>
          <p className='border border-x-transparent border-y-sky-600'> 
            ylenia.rossi@outlook.com </p>
        </div>
      
      </section>
      <Footer/>
    </>
  )
}

export default Contact