import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import React from 'react'

const Contact = () => {
  return (
    <>
    <Hero/>
    <section className='max-container'>
      
      <h1 className='head-text flex justify-center'>
        Contact me..
      </h1>

      <div className='py-8'>
        <h2 className='head-text flex justify-center'>
            <span className="relative text-white">Email:</span>
        </h2>

        <div className='mt-5 flex justify-center gap-3 text-white'>
          <p className='py-4 border border-x-transparent border-y-sky-600'> 
            ylenia.rossi@outlook.com</p>
        </div>
      </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact