import "./index.css"
import React from "react"
import { useEffect, useState } from "react"
import { Loader } from "./components/Loader/Loader"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Skills } from "./components/skills/Skills"
import { Projects } from "./components/Projects/Projects"

export const LocaleContext = React.createContext()

const defaultProjects = [
	{name:"Antools", img:"./img/Antools.png", href:"https://elrataalada.github.io/Antools/"},
	{name:"Rakfint", img:"./img/Rakfint.png", href:"https://elrataalada.github.io/Rakfint/"},
	{name:"ActiveBox", img:"./img/ActiveBox.png", href:"https://elrataalada.github.io/ActiveBox/"},
]

function App() {
	const [loader, setLoader] = useState(true)

	const [locale, setLoc] = useState(JSON.parse(localStorage.getItem("locale")) || "en")

	const [projects, setProjects] = useState(defaultProjects)

	function setLocale(locale) {
		setLoc(locale)
		localStorage.setItem("locale", JSON.stringify(locale))
	}

	useEffect(() => {
		const white = JSON.parse(localStorage.getItem("theme"))

		if (white) document.body.classList.add("white")

		setTimeout(() => {
			setLoader(false)
			document.body.style.overflow = "visible"
		}, 4000)
	}, [])

	return (
		<>
			<LocaleContext.Provider value={{ locale: locale, setLocale: setLocale }}>
				{loader ? <Loader /> : <></>}

				<div className="app">
					<Header />
					<Main />

					<Skills />
					<Projects projects={projects} defaultProjects={defaultProjects} setProjects={setProjects}/>
					
				</div>
			</LocaleContext.Provider>
		</>
	)
}

export default App
