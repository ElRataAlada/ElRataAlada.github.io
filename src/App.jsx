import "./index.css"
import React from "react"
import { useEffect, useState } from "react"
import { Loader } from "./components/Loader/Loader"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Project } from "./components/Project/Project"
import { Skills } from "./components/skills/Skills"

export const LocaleContext = React.createContext()

function App() {
	const [loader, setLoader] = useState(true)

	const [locale, setLoc] = useState(JSON.parse(localStorage.getItem("locale")) || "en")

	function setLocale(locale) {
		setLoc(locale)
		localStorage.setItem("locale", JSON.stringify(locale))
		window.location.reload()
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


					<div className="projects_wrapper" style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"50px"}}>
						<Project name={"Antools"} img={"./img/Antools.png"} href={"https://elrataalada.github.io/Antools/"} />
						<Project name={"Rakfint"} img={"./img/Rakfint.png"} href={"https://elrataalada.github.io/Rakfint/"} />
						<Project name={"ActiveBox"} img={"./img/ActiveBox.png"} href={"https://elrataalada.github.io/ActiveBox/"} />
					</div>

					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</LocaleContext.Provider>
		</>
	)
}

export default App
