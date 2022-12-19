import React, { useState } from 'react';
import { LocaleContext } from '../../App';
import './Lang.min.css'

export function Lang (){
    const [isOpen, setIsOpen] = useState(false);

    const {locale, setLocale} = React.useContext(LocaleContext)

    return(
        <div className='lang_selector no-select pointer' onMouseOver={() => {setIsOpen(true)}}>

        <img className='lang_selector_img white-filter ft' src="../img/icons/lang.svg" alt="language selector"/>
        
        <div className="dropdown_wrapper" onMouseOut={() => {setIsOpen(false)}}>
            <ul className={`dropdown ${isOpen ? "visible" : ""}`}>
                <li className='component' onClick={() => setLocale('ua')}>
                    <img src="../img/icons/Ukraine.svg" alt="Ukraine flag"/>
                </li>

                <li className='component' onClick={() => setLocale('en')}>
                    <img src="../img/icons/USA.svg" alt="USA flag"/>
                </li>
            </ul>
        </div>

    </div>
    )
}