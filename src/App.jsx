import './App.css'
import { DarkmodeProvider } from './components/DarkmodeContext'
import Hero from './sections/Hero'
import About from './sections/About'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Populararea from './sections/Populararea'
function App() {

  return (
    <>
    <DarkmodeProvider>
    <Header/>
    <Hero/>
    <About/>
    <Populararea/>
    <Properties/>
    <Services/>
    <Clients/>
    <Footer/>
    </DarkmodeProvider>
    </>
  )
}

export default App
