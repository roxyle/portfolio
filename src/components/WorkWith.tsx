import { skillsFrameLab, otherSkills, skillsLang } from '@/constants'
import Image from 'next/image';

import React from 'react'

const WorkWith = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-5 gap-2'>
        <span className='subhead-text'>I work with:</span>

        <div className='flex flex-wrap items-center justify-center gap-2'>
          {skillsLang.map((skill)=> (
            <div key={skill.id} className='block-container w-20 h-20' title={skill.name}>
              <div key={skill.id} className='btn-back rounded-xl'/>
              <div key={skill.id} className='btn-front rounded-xl flex justify-center items-center'>
                <Image
                key={skill.id}
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          )
          )}
        </div>

        <div className='flex flex-wrap items-center justify-center gap-2'>
          {skillsFrameLab.map((skill)=> (
            <div key={skill.id} className='block-container w-20 h-20' title={skill.name}>
              <div key={skill.id} className='btn-back rounded-xl'/>
              <div key={skill.id} className='btn-front rounded-xl flex justify-center items-center'>
                <Image
                key={skill.id}
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          )
          )}
        </div>

        <div className='flex flex-wrap items-center justify-center gap-2'>
          {otherSkills.map((skill)=> (
            <div key={skill.id} className='block-container w-20 h-20' title={skill.name}>
              <div key={skill.id} className='btn-back rounded-xl'/>
              <div key={skill.id}className='btn-front rounded-xl flex justify-center items-center'>
                <Image
                key={skill.id}
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