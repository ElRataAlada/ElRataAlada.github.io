import './Skill.scss'

export function Skill ({text, icon}){
    return(
        <div className='skill'>
            <img className='ft' src={icon} alt={text}/>
            {text}
        </div>
    )
}