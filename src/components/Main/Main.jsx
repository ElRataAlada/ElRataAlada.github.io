import React, { useRef} from 'react'
import { LocaleContext } from '../../App'
import { Laptop } from '../Laptop/Laptop';
import './Main.scss'

export function Main (){
    const lightRef = useRef();
    const lampRef = useRef();

    const {locale} = React.useContext(LocaleContext)

    return(
        <section className='main'>
            <div className="intro">
                {locale === "en" ? (
                    <>
                        <h2 className="hello">Hello, I'm</h2>
                        <h1 className="position">front end developer</h1>
                        <p className="text">
                            My name is Alexander, I'm a developer from Ukraine. <br />
                            I have a half year experience in website development. I want to contribute to the development and visualization of creative Web-sites and Web-applications.
                        </p>
                    </>
                  ) : (
                    <>
                        <h2 className="hello">Привіт, я</h2>
                        <h1 className="position">front end developer</h1>
                        <p className="text">
                            Мене звати Олександр, я розробник з України. <br />
                            Маю піврічний досвід розробки сайтів. Я хочу зробити свій внесок у розробку та візуалізацію креативних веб-сайтів і веб-додатків.
                        </p>
                    </>
                )}
            </div>

            <div className='desk no-select'>

                <div className='lamp' ref={lampRef} onAnimationEnd={() => {lampRef.current.classList.add("init")}}><img src="./img/lamp.png" alt="lamp"/></div>
                <div className='light' ref={lightRef} onAnimationEnd={() => {lightRef.current.classList.add("init")}}></div>

                <Laptop/>

                <div className='cup'><img src="./img/cup.svg" alt="cup"/></div>
                <div className='cactus'><img src="./img/cactus.svg" alt="cactus"/></div>

                <div className='shelf'></div>
                <div className='wall'></div>
            </div>
        </section>
    )
}