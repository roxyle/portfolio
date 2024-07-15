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
    <section className='max-container'>

      <div className='mt-5 flex flex-col gap-3 text-white'>
        <p className='py-4 text-center border border-x-transparent border-y-blue-600'> 
        <strong>I love creating things: </strong>
        whether it is an object, a drawing, a program, or a recipe,<br/>
        I derive great satisfaction from <strong>studying and understanding</strong> <br/>
        the <strong>foundational development process</strong> behind every single thing. <br/>
        Studying Java OOP has allowed me to better <strong>understand, analyze, and organize</strong> <br/>
        the various processes of <strong>Robotic Automation</strong> assigned to me <br/>
        during my last experience at Bss-One (2022) for <strong>Engineering.</strong> <br/>
        This includes every step, <strong>from creating workflows to testing the application.</strong><br/>
          When <strong>planning</strong> a project, I break down the work into <strong>steps, conceptual maps and workflows.</strong> <br/>
          I find this "divide and conquer" strategy very effective,<br/> 
          not only for <strong>tasks prioritization and development process</strong>, <br/>
          but also for <strong>writing functional analysis and technical documentation.</strong></p>
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