import './Header.min.css'
import { Lang } from '../Lang/Lang'
import { ThemeChanger } from './ThemeChanger/ThemeChanger'
import { useEffect, useRef } from 'react'

export function Header (){

    const headerRef = useRef()
    
    useEffect(() => {
        const scrollHandler = document.addEventListener("scroll", () => {

            if (window.pageYOffset >= (window.innerHeight-200)){
                headerRef.current.classList.add("fixed")
            }
            else{
                headerRef.current.classList.remove("fixed")
            }
        })

        return () => window.removeEventListener("scroll", scrollHandler)

    }, [])

    return(
        <div className='header' ref={headerRef}>

            <ul className='links no-select pointer'>
                <li className='link' data-title="Github" title='Github'><a href="https://github.com/ElRataAlada" target="blank"><img className='ft' src="./img/icons/github.svg" alt="github"/></a></li>
                <li className='link' data-title="CV" title='Download CV'><a href="./img/icons/cv.png" download><img className='ft' src="./img/icons/cv.png" alt="CV"/></a></li>
            </ul>

            <div style={{display:"flex", alignItems:"center", gap:"30px"}}>
                <ThemeChanger/>
                <Lang/>            
            </div>

        </div>
    )
}