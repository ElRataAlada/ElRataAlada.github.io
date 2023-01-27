import React, { useState } from 'react'
import { useEffect } from 'react';
import { LocaleContext } from '../../App'
import './Loader.scss'

export function Loader (){
    const {locale} = React.useContext(LocaleContext);

    const text = locale === 'ua' ? "Підтримуй Україну" : "Support Ukraine"

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
        document.body.style.overflow = "auto"
    }, 4000)
    
    useEffect(() => {
        document.body.style.overflow = "hidden"
    }, [])

    return(
        isLoading ?
            <div className='loader'>
                <div className='loader_top'>
                    <div className='text_wrapper'>
                        <h1 className='loader-text'>{text}<span style={{color:"orange"}}>...</span></h1>
                    </div>
                </div>
                <div className='loader_bottom'>
                    <div className='heart'></div>
                </div>
            </div>
        :<></>
    )
}