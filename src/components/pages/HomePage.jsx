import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"

const HomePage = () => {
    const certificates = [
        {image: '/images/certificates/diploma-frontend-academlo.webp'},
        {image: '/images/certificates/diploma-arrays.webp'},
        {image: '/images/certificates/diploma-react.webp'},
        {image: '/images/certificates/diploma-api-profesional.webp'},
        {image: '/images/certificates/diploma-koe.webp'},
        {image: '/images/certificates/diploma-git-github.webp'},
        {image: '/images/certificates/diploma-frameworks-javascript.webp'},
        {image: '/images/certificates/diploma-ingles-developers.webp'},
        {image: '/images/certificates/diploma-asincronismo-js.webp'},
        {image: '/images/certificates/diploma-habilidades-blandas.webp'},
        {image: '/images/certificates/diploma-ecmascript-6.webp'},
        {image: '/images/certificates/diploma-frontend-developer-practico.webp'},
        {image: '/images/certificates/diploma-frontend-developer.webp'},
        {image: '/images/certificates/diploma-javascript-navegador.webp'},
        {image: '/images/certificates/diploma-javascript-practico.webp'},
        {image: '/images/certificates/diploma-npm.webp'},
        {image: '/images/certificates/diploma-slack.webp'},
        {image: '/images/certificates/diploma-terminal.webp'},
        {image: '/images/certificates/diploma-webpack.webp'},
        {image: '/images/certificates/diploma-api-practico.webp'},
        {image: '/images/certificates/diploma-api.webp'},
        {image: '/images/certificates/diploma-backend.webp'},
        {image: '/images/certificates/diploma-html-practico.webp'},
        {image: '/images/certificates/diploma-html-css.webp'},
        {image: '/images/certificates/diploma-ingenieria.webp'},
        {image: '/images/certificates/diploma-paginas-web.webp'},
        {image: '/images/certificates/diploma-pensamiento-logico-estructuras.webp'},
        {image: '/images/certificates/diploma-pensamiento-logico-lenguajes.webp'},
        {image: '/images/certificates/diploma-pensamiento-logico.webp'},
        
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <MyProjects />
            <Techs />
            <section name="Education" className="relative w-full my-16">
              <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                  <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
                    Education
                  </h2>
                </div>
                <div className="mt-8 space-y-6 text-lg">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-color">BS Computer Science</h3>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <span>Punjab University College of Information Technology (PUCIT), Lahore</span>
                      <span className="italic text-gray-400">2022 – Present</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm mt-1">
                      <span>Current Semester: 7th</span>
                      <span>CGPA: 3.80 / 4.00</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-color">FSc Pre-Medical</h3>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <span>KIPS College, Lahore</span>
                      <span className="italic text-gray-400">2019 – 2021</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm mt-1">
                      <span>1076/1100 (98%)</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-color">Matriculation</h3>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <span>KIPS School, Lahore</span>
                      <span className="italic text-gray-400">2017 – 2019</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm mt-1">
                      <span>1053/1100 (96%)</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-color">Preliminary Education</h3>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm">
                      <span>Dar-e-Arqam School (Hifz)</span>
                      {/* <span>City School</span> */}
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm">
                      {/* <span>Dar-e-Arqam School (Hifz)</span> */}
                      <span>City School</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Contact />
        </>
    )
}

export default HomePage