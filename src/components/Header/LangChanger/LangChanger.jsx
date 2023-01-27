import React, { useEffect, useRef, useState } from 'react';
import { LocaleContext } from '../../../App';
import './LangChanger.scss'

export function Lang (){
    const {setLocale} = React.useContext(LocaleContext)
    const [isOpen, setIsOpen] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {setIsOpen(false)}
          }

          document.addEventListener("mousedown", handleClickOutside);

          return () => {document.removeEventListener("mousedown", handleClickOutside);};
        }, [ref]);
      }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return(
        <div className='lang_selector no-select pointer' ref={wrapperRef} onMouseOver={() => {setIsOpen(true)}}>

        <img className="lang_selector_img ft" src="../img/icons/lang.svg" alt="language selector"/>
        
        <div className='dropdown_wrapper' onMouseLeave={() => {setIsOpen(false)}}>
            <ul className={`dropdown ${isOpen ? 'visible' : ''}`} >
                <li className='component' onClick={() => {setLocale('ua'); setIsOpen(false)}}>
                    <img src="../img/icons/Ukraine.svg" alt="Ukraine"/>
                </li>

                <li className='component' onClick={() => {setLocale('en'); setIsOpen(false)}}>
                    <img src="../img/icons/USA.svg" alt="USA"/>
                </li>
            </ul>
        </div>

    </div>
    )
}