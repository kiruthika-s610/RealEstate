import './App.css'
import { DarkmodeProvider } from './components/DarkmodeContext'
import Hero from './sections/Hero'
import About from './sections/About'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Populararea from './sections/Populararea'
function App() {

  return (
    <>
    <DarkmodeProvider>
    <Hero/>
    <About/>
    <Populararea/>
    <Properties/>
    <Services/>
    <Clients/>
    <Contact/>
    <Footer/>
    </DarkmodeProvider>
    </>
  )
}

export default App
