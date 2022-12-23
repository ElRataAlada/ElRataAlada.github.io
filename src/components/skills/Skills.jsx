import { useContext } from 'react'
import { LocaleContext } from '../../App'
import { Skill } from './Skill/Skill'
import './Skills.min.css'

export function Skills (){
  
    const {locale} = useContext(LocaleContext)

    return(
      <div className='skills-wrapper no-select'>
        {locale === 'ua' ?
            <h2 className='title'>Навички</h2>:
            <h2 className='title'>Skills</h2>
        }

        <div className="skills">
          <Skill text={"HTML"} icon={"./img/icons/html.svg"}/>
          <Skill text={"CSS"} icon={"./img/icons/css.svg"}/>
          <Skill text={"Sass"} icon={"./img/icons/sass.svg"}/>
          <Skill text={"JavaScript"} icon={"./img/icons/js.svg"}/>
          <Skill text={"React"} icon={"./img/icons/react.svg"}/>
          <Skill text={"TypeScript"} icon={"./img/icons/typescript.svg"}/>
          <Skill text={"C++"} icon={"./img/icons/c++.svg"}/>
          <Skill text={"Python"} icon={"./img/icons/python.svg"}/>
          <Skill text={"Git"} icon={"./img/icons/git.svg"}/>
        </div>
      </div>
    )
}