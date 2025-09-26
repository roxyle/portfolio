import React from 'react'
import { experiences } from '@/constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
    <Hero/>

<div className='flex flex-col items-center px-4 md:px-8 '>
        <div className='max-w-3xl border border-x-transparent border-y-green-300 p-5'>
            <h2 className='text-xl font-semibold mb-4 text-center'>I love creating things: </h2>
            <p className='text-left leading-relaxed text-base'>
              Whether it is an object, a drawing, a program, or a recipe,
              I derive great satisfaction from studying and understanding
              the foundational development process behind every single thing. 
              Studying Java OOP has allowed me to better understand, analyze, and organize
              the various processes of <strong>Robotic Automation</strong> assigned to me 
              during my last experience at Bss-One (2022) for <strong>Engineering. </strong>
              This includes every step, from <strong>creating workflows</strong> to <strong>testing the application. </strong>
              When <strong>planning</strong> a project, I break down the work into steps, conceptual maps and workflows.
              I find this "divide and conquer" strategy very effective,
              not only for <strong>tasks prioritization and development process</strong>, 
              but also for <strong>writing functional analysis and technical documentation.</strong>
            </p>  
        </div>
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
    
    <Footer/>
    </>
  )
}

export default About