import { BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import WorkExperience from "./components/WorkExperience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Projects from "./components/Projects" 
import StarsCanvas from './components/canvas/Stars'

function App() {
  return (
    <BrowserRouter>
     <div className="relative z-0 bg-primary">
       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
       </div>
       <AboutMe/>
       <WorkExperience/>
       <Skills/>
       <Projects/>
       <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
       </div>
     </div>
    </BrowserRouter>
    
  )
}

export default App
