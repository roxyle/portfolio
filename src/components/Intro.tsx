import React from 'react'

const Intro = () => {
  return (
    <div className='mt-5 flex flex-col items-center px-4 md:px-8 '>
        <div className='max-w-3xl border border-x-transparent border-y-sky-600 p-6'>
            <h2 className='text-xl font-semibold mb-4 text-center'>Hello and Welcome! 👋 </h2>            
            <p className='text-left leading-relaxed text-base'>I studied Java and MySQL in 2022. 
          After gaining work experience in RPA and Project Management, 
          I obtained the "Multimedia Products Designer" certification in 2023, 
          further expanding my skills in HTML, CSS, and JavaScript.
          In 2025, I completed a WordPress development course and attended the
          MuleSoft Academy, acquiring expertise in API-led connectivity using the Anypoint Platform,
          including API Manager and Anypoint Studio.
          I also gained practical knowledge in DataWeave (JSON, XML, CSV transformations),
          integration testing with mUnit, and deployment on CloudHub and on-premise environments.
            
            </p>  
        </div>
    </div>
  )
}

export default Intro