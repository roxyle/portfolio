import { skills } from '@/constants'
import Image from 'next/image';

import React from 'react'

const WorkWith = () => {
  return (
    <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Lavoro con:</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill)=> (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <Image
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          )
          )}

        </div>
      </div>
  )
}

export default WorkWith