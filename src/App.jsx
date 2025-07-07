import ParticlesBackground from "./components/ParticlesBackground"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import AboutPage from "./components/pages/AboutPage"
import HomePage from "./components/pages/HomePage"
import SocialLinks from "./components/SocialLinks"
import GeneralFooter from "./components/GeneralFooter"
import AllProjectsPage from "./components/pages/AllProjectsPage"
import AllTechsPage from "./components/pages/AllTechsPage"

function App() {
  // Determine the base path for routing
  const basename = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  return (
    <BrowserRouter basename={basename}>
      <ParticlesBackground />
      <SocialLinks />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about-me" element={<AboutPage />}/>

        <Route path="/projects" element={<AllProjectsPage />}/>

        <Route path="/technologies" element={<AllTechsPage />}/>

      </Routes>

      <GeneralFooter />
    </BrowserRouter>
  )
}

export default App
