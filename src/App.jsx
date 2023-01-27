import "./index.scss"
import React from "react"
import { useEffect, useState } from "react"
import { Loader } from "./components/Loader/Loader"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Skills } from "./components/skills/Skills"
import { Projects } from "./components/Projects/Projects"
import axios from "axios"

export const LocaleContext = React.createContext()

let defaultProjects = []

const skills = [
	{text: "HTML", icon:"./img/icons/html.svg"},
	{text: "CSS", icon: "./img/icons/css.svg"},
	{text: "Sass", icon: "./img/icons/sass.svg"},
	{text: "JavaScript", icon: "./img/icons/js.svg"},
	{text: "TypeScript", icon: "./img/icons/typescript.svg"},
	{text: "React", icon: "./img/icons/react.svg"},
]

const alsoKnow = [
	{text: "Photoshop", icon: "./img/icons/photoshop.svg"},
	{text: "AdobeXD", icon: "./img/icons/xd.svg"},
	{text: "Figma", icon: "./img/icons/figma.svg"},
	{text: "C++", icon: "./img/icons/c++.svg"},
]

function App() {
	const [locale, setLoc] = useState(JSON.parse(localStorage.getItem("locale")) || "en")

	const [projects, setProjects] = useState(defaultProjects)

	function setLocale(locale) {
		setLoc(locale)
		localStorage.setItem("locale", JSON.stringify(locale))
	}

	async function fetchProjects() {
		let data = await axios.get('./projects.json')
		setProjects(data.data)
		defaultProjects = data.data
	}
	
	useEffect(() => {
		const white = JSON.parse(localStorage.getItem("theme"))
		if (white) document.documentElement.classList.add("white")
		fetchProjects()
	}, [])

	return (
		<>
			<LocaleContext.Provider value={{ locale: locale, setLocale: setLocale }}>
				<Loader/>

				<div className="app">
					<Header />
					<Main />

					<div className="skills_container">
						<Skills  title={{en: "Skills", ua: "Навички"}} skills={skills}/>
						<Skills className="also_know" title={{en: "Also know", ua: "Також знаю"}} skills={alsoKnow}/>
					</div>

					<Projects projects={projects} defaultProjects={defaultProjects} setProjects={setProjects}/>
					
				</div>
			</LocaleContext.Provider>
		</>
	)
}

export default App
