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
              I like understanding how systems work, and making that understanding{' '}
  <strong>clear and transferable to others</strong>. My approach is to break
  complex processes into smaller steps, map dependencies and edge cases, and
  turn them into workflows that are easier to build, reason about, and
  maintain. On the <strong>RPA projects for banking clients</strong> (2022),
  this meant treating implementation and documentation as two parts of the
  same delivery: I built the automations and documented the{' '}
  <strong>AS IS process and TO BE solution</strong>, prerequisites, systems
  involved, <strong>screen-level inputs and outputs</strong>, exception paths,
  version history, and scope changes. The goal was not only to make the
  automation work, but to leave behind a solution that another developer could{' '}
  <strong>understand, troubleshoot, and maintain</strong> without having to
  reconstruct the reasoning behind it.
            </p>  
        </div>
    </div>

      <div className='py-8'>
        <h2 className='head-text flex justify-center'>
            <span className="relative text-white">Work Experience:</span>
        </h2>

        <div className='mt-12 flex prevent-anchor'>
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