import { Skill } from './Skill/Skill'

export function Skills (){
    return(
      <div className='skills'>
        <Skill text={"HTML"} icon={"./img/icons/html.svg"}/>
        <Skill text={"CSS"} icon={"./img/icons/css.svg"}/>
        <Skill text={"Sass"} icon={"./img/icons/sass.svg"}/>
        <Skill text={"JS"} icon={"./img/icons/js.svg"}/>
        <Skill text={"React"} icon={"./img/icons/react.svg"}/>
        <Skill text={"C++"} icon={"./img/icons/c++.svg"}/>
      </div>
    )
}