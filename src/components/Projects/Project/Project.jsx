import { useState } from 'react'
import { Popup } from '../../Popup/Popup'
import { ProjectPopup } from '../ProjectPopup/ProjectPopup'
import './Project.scss'

export function Project ({data}){
    const {name, href, img, title, framework=""} = data
    const [isVisible, setIsVis] = useState(false)
    
    function setIsVisible(value){
        setIsVis(value)
        value ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }

    return(
    <>
        <div className='project no-select pointer' title={title} onClick={() => setIsVisible(true)}>
            <img className='img' src={img} alt={name}/>
                
            <h3 className='title'>
                <p>{name}</p> 
                {framework.toLowerCase() === "react" ?  <img src="./img/icons/react.svg" alt="React"/> : <></>}
            </h3>
        </div>

        <Popup isVisible={isVisible} setIsVisible={setIsVisible}>
            <ProjectPopup setIsVisible={setIsVisible} project={data}/>
        </Popup> 
    </>
    )
}