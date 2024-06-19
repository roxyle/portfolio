import React from 'react'
import { skills, experiences } from '@/constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
    <Hero/>
    <section className='max-container'>
      
      <h1 className='head-text flex justify-center'>
        About me..
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-white'>
        <p className='py-4 border border-x-transparent border-y-sky-600'> 
          I studied Java and MySQL in 2022.<br/> 
          After a work experience in RPA and Project Managing, 
          I took the certification as a 
          Multimedia Designer in 2023, 
          adding to my experience also HTML, CSS and JavaScript. </p>
      </div>

      <div className='py-8'>
        <h2 className='head-text flex justify-center'>
            <span className="relative text-white">Work Experience:</span>
        </h2>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience)=> (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <Image src={experience.icon}
                    alt={experience.company_name}
                    className='w-[95%] h-[95%] object-contain'
                    />
                  </div>}
                  iconStyle={{background: experience.iconBg}}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}
                >

                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'> 
                      {experience.title} </h3>
                      <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                        {experience.company_name}
                      </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2 text-black-500'>
                    {experience.points.map((point, index)=> (
                      <li key={`experience-point-${index}`} className='text.black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    )
                    )}
                  </ul>

                </VerticalTimelineElement>
            )
            )}


          </VerticalTimeline>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default About