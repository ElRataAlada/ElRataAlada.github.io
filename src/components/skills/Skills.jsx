import { useContext } from 'react'
import { LocaleContext } from '../../App'
import { Skill } from './Skill/Skill'
import './Skills.scss'

export function Skills ({title, skills, aspect}){
  
    const {locale} = useContext(LocaleContext)

    return(
      <div className='skills-wrapper no-select' style={{width: aspect}}>
        <h2 className='title'>{locale === 'ua' ? title.ua : title.en}</h2>

        <div className="skills_inner">
          {skills.map(skill => <Skill key={skill.text} text={skill.text} icon={skill.icon}/>)}
        </div>
      </div>
    )
}