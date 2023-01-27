import './Header.scss'
import { Lang } from './LangChanger/LangChanger'
import { ThemeChanger } from './ThemeChanger/ThemeChanger'
import { useEffect, useRef } from 'react'

export function Header (){

    const headerRef = useRef()
    
    useEffect(() => {
        const scrollHandler = document.addEventListener("scroll", () => {

            if (window.pageYOffset >= (window.innerHeight-200)){
                headerRef.current.classList.add("fixed")
                headerRef.current.classList.remove("hiding")
            }
            else{
                headerRef.current.classList.remove("fixed")
                headerRef.current.classList.add("hiding")
            }
        })

        return () => window.removeEventListener("scroll", scrollHandler)

    }, [])

    return(
        <header className='header hiding' ref={headerRef}>

            <ul className='links no-select pointer'>
                <li className='link' data-title="Github" title='Github'><a href="https://github.com/ElRataAlada" target="blank"><img className='ft' src="./img/icons/github.svg" alt="github"/></a></li>
                {/* <li className='link' data-title="CV" title='Download CV'><a href="" style={{pointerEvents:"none"}} download><img className='ft' src="./img/icons/cv.png" alt="CV"/></a></li> */}
            </ul>

            <nav style={{display:"flex", alignItems:"center", gap:"20px"}}>
                <ThemeChanger/>
                <Lang/>            
            </nav>

        </header>
    )
}