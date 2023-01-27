import { Skill } from '../../skills/Skill/Skill'
import './ProjectPopup.scss'

export function ProjectPopup ({project, setIsVisible}){
    const {name, href, img, description, langs } = project

    return(
        <div className="project__popup">
            <div className="project__popup_left">
                <img className='project__popup_img' src={img} alt={name}/>
            </div>

            <button onClick={() => setIsVisible(false)} className='btn_close'></button>

            <div className="project__popup_right">
                <h3 className='title'>{name}</h3>
                <p className='text'>{description}</p>

                <div className="langs">
                    {langs.map((lang, i) => <Skill key={i + 200} text={lang.text} icon={lang.icon}/>)}
                </div>

                <div className="btns">
                    <a className='btn' href={href} target="_blank" rel="noreferrer"><img src="./img/icons/browser.svg" alt="link" title='View site'/></a>
                    <a className='btn main' href={`https://github.com/ElRataAlada/${name}`} target="_blank" rel="noreferrer"><img src="./img/icons/code.png" alt="link" title='Code'/></a>
                </div>
            </div>
        </div>
    )
}