import React from 'react';
import { useEffect, useState} from 'react';
import { Loader } from './components/Loader/Loader';
import { Header } from './components/Header/Header';
import { Skills } from './components/skills/Skills';
import './index.css'

export const LocaleContext = React.createContext();

function App() {
  const [loader, setLoader] = useState(true);

  const [locale, setLoc] = useState( JSON.parse(localStorage.getItem('locale')) || 'en');

  function setLocale (locale){
    setLoc(locale)
    localStorage.setItem('locale', JSON.stringify(locale))
    window.location.reload();
  }

  useEffect(() => {
    const white = JSON.parse(localStorage.getItem('theme'))

    if (white) document.body.classList.add("white")

    setTimeout(() => {
      setLoader(false)
    }, 4000)
  }, [])

  return (
    <>
      <LocaleContext.Provider value={{locale:locale, setLocale: setLocale}}>

        { loader ?<Loader/>:<></> }

        <div className="app">
          <Header/>

          <Skills/>

          <div className='text'>
          { locale === 'en' ? 
              <>
                <p>My name is Alexander, I have three years of experience as a frontend developer and recently became a backend developer, I am interested in frontend and backend development, I want to become a Senior Full Stack Developer</p>  
              </>
              :
              <>

              </> 
          }
          </div>

    
        </div>
      </LocaleContext.Provider>
    </>
  );
}

export default App;
