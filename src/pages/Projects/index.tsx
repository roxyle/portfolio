import React from 'react'
import { projects } from '@/constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { arrow } from '@/assets/icons';


export default function Projects() {
  return (<>
   <Hero/>

   

      <div className='flex flex-col items-center px-4 md:px-8 '>
        <div className='max-w-3xl border border-x-transparent border-y-violet-600 p-5'>
          <p className='py-4 text-left leading-relaxed text-base'>
            This page hosts a variety of my projects, showcasing hands-on experience in web development and programming. 
            Most of them are simple experiments or exercises, reflecting my ongoing practice and curiosity in learning new technologies, such as JS, TS, HTML, CSS, and database interactions. 
            By exploring different tools and frameworks, I aim to strengthen my problem-solving skills and apply theoretical knowledge to real-world scenarios. 
            This collection is a snapshot of my continuous growth, and it evolves as I take on new challenges and expand my technical expertise.</p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center m-4 gap-8 px-5 '>
        {projects.map((project)=> (
          <div className='outline outline-1 shadow-md shadow-slate-400 rounded-xl 
          lg:w-[400px] w-full flex flex-col flex-wrap min-h-[300px] items-center m-8' key={project.name}>
            <div className='mt-6 block-container w-12 h-12 '>
              <div className={`btn-back rounded-xl ${project.theme}`}  />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <Image src={project.iconUrl}
                alt='Project Icon'
                className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
            

            <div className='m-5 flex flex-col justify-between flex-grow'>
                
                  <h4 className='text-2xl font-poppins font-semibold'>
                  {project.name}
                  </h4>
                  <p className='text-slate-500'>
                  {project.description}
                  </p>
                  <div className='flex items-center justify-center gap-2 mx-2 font-poppins'>
                  <Link href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                  >
                    Take a Look
                  </Link>
                  <Image src={arrow} alt='arrow' className='w-4 h-4 object-contain' />


                </div>
              </div>
            </div>

          
          
        )        )        }


      </div> 


      
    
    


   <Footer/>
  </>)
}