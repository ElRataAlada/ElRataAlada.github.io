import React, { useEffect, useRef} from 'react'
import { LocaleContext } from '../../App'
import './Main.min.css'

export function Main (){

    const scrollLeftRef = useRef();
    const lightRef = useRef();

    const {locale} = React.useContext(LocaleContext)

    useEffect(() => {

        let interval

        setTimeout(() => {
            interval = setInterval(() => {
                scrollLeftRef.current.scrollTop += 1
            }, 10)

            setTimeout(() => {
                clearInterval(interval)
            }, 2000);
        }, 4000)

        
        return () => {clearInterval(interval)}
    }, [])

    return(
        <main className='main'>
            <div className="intro">
                {locale === "en" ? (
                    <>
                        <h2 className="hello">Hello, I'm</h2>
                        <h1 className="position">front end developer</h1>
                        <p className="text">
                            My name is Alexander, I am a developer from Ukraine. <br/>
                            I have a year of experience as a frontend developer and I wish to contribute to the development and visualization Web-sites and Web-applications. 
                        </p>
                    </>
                ) : (
                    <>
                        <h2 className="hello">Привіт, я</h2>
                        <h1 className="position">front end developer</h1>
                        <p className="text">
                            Мене звати Олександр, я розробник з України <br/>
                            Я маю річний досвід роботи фронтенд-розробником і хочу зробити свій внесок в розробку та візуалізацію веб-сайтів і веб-додатків.
                        </p>
                    </>
                )}
            </div>

            <div className='desk no-select'>

                <div className='lamp'><img src="./img/lamp.png" alt="lamp"/></div>
                <div className='light' ref={lightRef} onAnimationEnd={() => {lightRef.current.classList.add("on")}}></div>

                <div className='laptop_wrapper'>
                    <div className='laptop_screen'>
                        <div className='scroll-element'>
                            <div className="nav f-gray">
                                <div className='circle_nav'>
                                    <span className='circle red'></span>
                                    <span className='circle yellow'></span>
                                    <span className='circle green'></span>
                                </div>
                            </div>

                            <div className='scroll_area' ref={scrollLeftRef}>
                                <div className='scroll-div h-80 blue'>
                                    <span className='big-line'></span>
                                    <span className='line l-8 red'></span>
                                    <span className='line l-2'></span>
                                    <span className='line l-6'></span>
                                    <span className='line l-9'></span>
                                </div>

                                <div className='scroll-div h-80 purple'>
                                    <span className='line '></span>
                                    <span className='line l-7'></span>
                                    <span className='line l-6'></span>
                                    <span className='line l-6'></span>
                                    <span className='line '></span>
                                    <span className='line l-5'></span>
                                    <span className='line l-6'></span>
                                    <span className='line l-9'></span>
                                    <span className='line l-9'></span>
                                </div>

                                <div className='scroll-div h-80 d-green'>
                                    <span className='line l-4'></span>
                                    <span className='line l-4'></span>
                                    <span className='line l-8'></span>
                                    <span className='line l-9'></span>
                                    <span className='line l-7'></span>
                                    <span className='line l-7'></span>
                                    <span className='line l-7'></span>
                                    <span className='line l-7'></span>
                                </div>
                            </div>
                        </div>

                        <div className='main-window'>
                            <div className="nav">
                                <div className='circle_nav'>
                                    <span className='circle red'></span>
                                    <span className='circle yellow'></span>
                                    <span className='circle green'></span>
                                </div>
                            </div>

                            <div className='main_inner'>
                                <span id='c-1' className='code l-5'>33</span>
                                <span id='c-2'className='code l-9'>34</span>
                                <span id='c-3'className='code l-8'>35</span>
                                <span id='c-4'className='code l-4'>36</span>
                                <span id='c-5'className='code l-3'>37</span>
                                <span id='c-6'className='code l-8'>38</span>
                                <span id='c-7'className='code l-5'>39</span>
                                <span id='c-8'className='code l-6'>40</span>
                                <span id='c-9'className='code l-9'>41</span>
                                <span id='c-10'className='code l-8'>42</span>
                                <span id='c-11'className='code l-5'>43</span>
                                <span id='c-12'className='code l-6'>44</span>
                                <span id='c-13'className='code l-7'>45</span>
                            </div>


                        </div>

                        <div className='popup-cmd'>
                            <div className="nav">
                                <div className='circle_nav'>
                                    <span className='circle red'></span>
                                    <span className='circle yellow'></span>
                                    <span className='circle green'></span>
                                </div>
                            </div>

                            <span className='cmd-in'></span>

                        </div>
                    </div>
                    <img className='laptop_img' src="./img/laptop.png" alt="laptop"/>
                </div>

                <div className='cup'><img src="./img/cup.svg" alt="cup"/></div>
                <div className='cactus'><img src="./img/cactus.svg" alt="cactus"/></div>

                <div className='shelf'></div>
                <div className='wall'></div>
            </div>
        </main>
    )
}