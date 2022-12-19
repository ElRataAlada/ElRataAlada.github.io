import './Skill.min.css'

export function Skill ({text, icon, alt}){
    return(
        <div className='skill'>
            <img className='ft' src={icon} alt={text}/>
            {text}
        </div>
    )
}