import { skillsFrameLab, otherSkills, skillsLang } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import type { Skill } from '@/types'   // importa l’interfaccia Skill

const WorkWith: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const handleClick = (id: string) => {
    setActiveSkill(activeSkill === id ? null : id)
  }

  const renderSkill = (skill: Skill) => (
    <div key={skill.id} className="flex flex-col items-center">
      <div className="block-container w-20 h-20 cursor-pointer"
        onClick={() => handleClick(skill.id)}
        title={skill.name}>

        <div className="btn-back rounded-xl" />
        <div className="btn-front rounded-xl flex justify-center items-center">
          <Image src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain"/>
        </div>
      </div>
      <span className={`mt-1 text-xs font-semibold text-white sm:hidden transition-opacity duration-200
                        ${ activeSkill === skill.id ? 'opacity-100':'opacity-0'}
      `}>
        {skill.name}
      </span>
    </div>
  )

  return (
    <div className="flex flex-col items-center justify-center pt-5 gap-2">
      <span className="subhead-text">I work with:</span>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {skillsLang.map(renderSkill)}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {skillsFrameLab.map(renderSkill)}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {otherSkills.map(renderSkill)}
      </div>
    </div>
  )
}

export default WorkWith
