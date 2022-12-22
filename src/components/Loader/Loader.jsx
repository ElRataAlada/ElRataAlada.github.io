import React from 'react'
import { LocaleContext } from '../../App'
import './Loader.min.css'

export function Loader (){
    const {locale} = React.useContext(LocaleContext);

    const ua = "Підтримуй Україну"
    const en = "Support Ukraine"

    const text = locale === 'ua' ? ua : en

    return(
        <div className='loader'>
            <div className='loader_top'>
                <div className='name_wrapper'>
                    <h1 className='name'>{text}<span style={{color:"orange"}}>...</span></h1>
                </div>
            </div>
            <div className='loader_bottom'>
                <div className='heart'></div>
            </div>
        </div>
    )
}