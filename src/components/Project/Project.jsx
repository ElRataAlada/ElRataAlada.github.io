import './Project.min.css'

export function Project ({name, framework="", href, img}){

    return(
        <div className='project no-select pointer'>
            <a href={href} target="_blank" rel="noreferrer">
                <img className='img' src={img} alt={name}/>
                
                {framework.toLowerCase() === "react" ?  <img className='framework' src="./img/icons/react-color.svg" alt="React logo"/> : <></>}
                <h3 className='title'>{name}</h3>

                <a href={`https://github.com/ElRataAlada/${name}`} target="_blank" rel="noreferrer">
                    <img className='link' src="./img/icons/github.svg" alt="github link"/>
                </a>
            </a>
        </div>
        
    )
}