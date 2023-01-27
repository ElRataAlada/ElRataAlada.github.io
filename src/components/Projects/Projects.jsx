import { useContext, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { LocaleContext } from '../../App'
import { Filter } from './Filter/Filter'
import { Project } from './Project/Project'
import './Projects.scss'

const selectors = [{en:"all", ua:"всі"}, {en:"react", ua:"react"}, {en:"markup", ua:"верстка"}]

export function Projects ({projects, defaultProjects, setProjects}){
    const {locale} = useContext(LocaleContext)

    const [selectorId, setSelectorId] = useState(0);
    const [parent] = useAutoAnimate()

    function filterProjects(query=""){
        if(query === 'all'){
            setProjects(defaultProjects)
        }

        if (query === 'react') {
            setProjects([...defaultProjects].filter(project => project["framework"] === 'react') )
        }

        if (query === 'markup') {
            setProjects([...defaultProjects].filter(project => !project["framework"]))
        }
    }

    return(
        <div className="projects_wrapper no-select">

            {locale === 'ua' ?
                <h2 className='projects-title'>Проекти</h2>:
                <h2 className='projects-title'>Projects</h2>
            }

            <Filter selectors={selectors} setSelectorId={setSelectorId} selectorId={selectorId} filter={filterProjects}/>

            <div>
                {projects.length === 0 ? locale === 'ua' ?
                    <h3 className='empty'>Тільки цей сайт створено за допомогою React . . .</h3>:
                    <h3 className='empty'>Only this site is made using React . . .</h3>:
                    <></>
                } 

                <div ref={parent} className='projects'>
                    {projects.map(project => <Project key={project.name} data={project}/>)}
                </div>

            </div>
        </div>
    )
}