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

   <section className='max-container'>

        <div className='flex flex-col gap-3 text-white'>
          <p className='py-4 border text-center border-x-transparent border-y-violet-600'>
            Since I keep practicing, this page will always be a work in progress. Some projects are in Italian (well, most of them)</p>
        </div>


      <div className='flex flex-wrap justify-center items-center my-20 gap-16'>
        {projects.map((project)=> (
          <div className='lg:w-[400px] w-full flex flex-col flex-wrap min-h-[300px]' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}  />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <Image src={project.iconUrl}
                alt='Project Icon'
                className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
            

            <div className='mt-5 flex flex-col justify-between flex-grow'>
                
                  <h4 className='text-2xl font-poppins font-semibold'>
                  {project.name}
                  </h4>
                  <p className='text-slate-500'>
                  {project.description}
                  </p>
                  <div className='flex items-center gap-2 font-poppins'>
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


      
    </section>
    


   <Footer/>
  </>)
}