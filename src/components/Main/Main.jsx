import React, { useEffect, useRef} from 'react'
import { LocaleContext } from '../../App'
import './Main.min.css'

export function Main (){

    const scrollLeftRef = useRef();

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
                            My name is Alexander, I have three years of experience as a frontend developer and recently became a backend developer, I am interested in frontend and backend
                            development, I want to become a Senior Full Stack Developer
                        </p>
                    </>
                ) : (
                    <>
                        <h2 className="hello">Привіт, я</h2>
                        <h1 className="position">front end developer</h1>
                        <p className="text">
                            Мене звати Олександр, у мене 3 роки досвіду роботи в якості frontend розробника і не так давно став в якості backend розробника, мене цікавить frontend і backend розробка, я хочу стати Senior Full Stack Developer
                        </p>
                    </>
                )}
            </div>

            <div className='desk no-select'>
                <div className='laptop_wrapper'>
                    <img className='laptop_img' src="./img/laptop.png" alt="laptop"/>
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
                </div>

                <div className='shelf shelf-big'></div>
            </div>
        </main>
    )
}