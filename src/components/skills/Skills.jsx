import { Skill } from './Skill/Skill'
import './Skills.min.css'

export function Skills (){
    return(
      <div className='skills'>
        <Skill text={"HTML"} icon={"./img/icons/html.svg"}/>
        <Skill text={"CSS"} icon={"./img/icons/css.svg"}/>
        <Skill text={"Sass"} icon={"./img/icons/sass.svg"}/>
        <Skill text={"React"} icon={"./img/icons/react.svg"}/>
        <Skill text={"JavaScript"} icon={"./img/icons/js.svg"}/>
        <Skill text={"TypeScript"} icon={"./img/icons/typescript.svg"}/>
        <Skill text={"C++"} icon={"./img/icons/c++.svg"}/>
        <Skill text={"Python"} icon={"./img/icons/python.svg"}/>
        <Skill text={"Git"} icon={"./img/icons/git.svg"}/>
      </div>
    )
}