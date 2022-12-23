import { useState } from 'react'
import './ThemeChanger.min.css'

const body = document.body;

export function ThemeChanger (){
    const [isWhite, setIsWhite] = useState(JSON.parse(localStorage.getItem("theme")) || false)

    function writeTheme() {
        localStorage.setItem('theme', JSON.stringify(!isWhite))

        !isWhite ? body.classList.add('white') : body.classList.remove('white')
    }

    function changeTheme(){
        setIsWhite(prev => !prev)
        writeTheme()
    }

    return(
        <div>
            <input className='theme' type="checkbox" title='theme' id='theme'
                onChange={changeTheme} 
                checked={isWhite}/>
            <label className='theme_changer no-select pointer' htmlFor="theme">
                <span className='toggle'></span>
            </label>
        </div>
    )
}