import React, { useEffect, useRef, useState } from 'react';
import { LocaleContext } from '../../App';
import './Lang.min.css'

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

        <img className='lang_selector_img white-filter ft' src="../img/icons/lang.svg" alt="language selector"/>
        
        <div className="dropdown_wrapper" onMouseLeave={() => {setIsOpen(false)}}>
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