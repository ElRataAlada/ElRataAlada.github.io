import { useContext, useState } from 'react'
import { LocaleContext } from '../../App'
import { Filter } from './Filter/Filter'
import { Project } from './Project/Project'
import './Projects.min.css'

const selectors = [{en:"all", ua:"всі"}, {en:"react", ua:"react"}, {en:"layout", ua:"верстка"}]

export function Projects ({projects, defaultProjects, setProjects}){
    const {locale} = useContext(LocaleContext)

    const [selectorId, setSelectorId] = useState(0);

    function filterProjects(query=""){
        if(query === 'all'){
            setProjects(defaultProjects)
        }

        if (query === 'react') {
            setProjects([...defaultProjects].filter(project => project["framework"] === 'react') )
        }

        if (query === 'layout') {
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

            <div className='projects'>
                {projects.length === 0 ? locale === 'ua' ?
                    <h3 className='empty'>Проекти вже в розробці, проходьте пізніше</h3>:
                    <h3 className='empty'>Sorry, no projects yet <span>. . .</span></h3>:
                    <></>
                } 

                {projects.map(project => {
                return (<Project data={project} key={project.name}/>)  
                })}

            </div>
        </div>
    )
}