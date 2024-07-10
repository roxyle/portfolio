import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'

const Contact = () => {
  return (
    <>
    <Hero/>
    <section className='flex flex-col py-8'>
      
      <h1 className='head-text flex justify-center'>
      If I have captured your attention or if you'd like to have a chat, you can contact me here:
      </h1>

      <div className='py-8'>
        <h2 className='head-text flex justify-center'>
            <span className="relative text-white">Email:</span>
        </h2>

        <div className='mt-5 flex justify-center text-white'>
          <p className='py-4 border border-x-transparent border-y-sky-600'> 
            ylenia.rossi@outlook.com </p>
        </div>
      </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact