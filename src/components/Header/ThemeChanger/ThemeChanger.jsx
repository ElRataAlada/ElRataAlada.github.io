import { useState } from 'react'
import classes from './ThemeChanger.module.scss'

export function ThemeChanger (){
    const [isWhite, setIsWhite] = useState(JSON.parse(localStorage.getItem("theme")) || false)

    function writeTheme() {
        localStorage.setItem('theme', JSON.stringify(!isWhite))

        !isWhite ? document.documentElement.classList.add('white') :  document.documentElement.classList.remove('white')
    }

    function changeTheme(){
        setIsWhite(prev => !prev)
        writeTheme()
    }

    return(
        <div>
            <input className={classes.theme} type="checkbox" title='theme' id='theme'
                onChange={changeTheme} 
                checked={isWhite}/>
            <label className={[classes.theme_changer, "no-select", "pointer"].join(' ')} htmlFor="theme">
                <span className={classes.toggle}></span>
            </label>
        </div>
    )
}