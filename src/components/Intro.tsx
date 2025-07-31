import React from 'react'

const Intro = () => {
  return (
    <div className='mt-5 flex flex-col items-center px-4 md:px-8 '>
        <div className='max-w-3xl border border-x-transparent border-y-sky-600 p-6'>
            <h2 className='text-xl font-semibold mb-4 text-center'>Hello and Welcome! 👋 </h2>            
            <p className='text-left leading-relaxed text-base'>I studied <strong>Java</strong> and <strong>MySQL</strong> in 2022. 
          After gaining work experience in <strong>RPA</strong> and <strong>Project Management</strong>, 
          I obtained the "Multimedia Products Designer" certification in 2023, 
          further expanding my skills in HTML, CSS, and <strong>JavaScript</strong>.
          In 2025, I completed a WordPress development course and attended the
          <strong>MuleSoft Academy</strong>, acquiring expertise in <strong>API-led connectivity</strong> using the <strong>Anypoint Platform</strong>,
          including API Manager and <strong>Anypoint Studio</strong>.
          I also gained practical knowledge in <strong>DataWeave</strong> (JSON, XML, CSV transformations),
          integration testing with <strong>mUnit</strong>, and deployment on CloudHub and on-premise environments.
            
            </p>  
        </div>
    </div>
  )
}

export default Intro