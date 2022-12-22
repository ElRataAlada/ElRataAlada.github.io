import './Header.min.css'
import { Lang } from '../Lang/Lang'
import { ThemeChanger } from './ThemeChanger/ThemeChanger'

export function Header (){
    return(
        <div className='header'>

            <ul className='links no-select pointer'>
                <li className='link' data-title="Github" title='Github'><a href="https://github.com/ElRataAlada" target="blank"><img className='ft' src="../img/icons/github.svg" alt="github"/></a></li>
            </ul>

            <div style={{display:"flex", alignItems:"center", gap:"20px"}}>
                <ThemeChanger/>
                <Lang/>            
            </div>

        </div>
    )
}