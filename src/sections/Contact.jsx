import React, { useEffect } from 'react'
import { useDarkmode } from '../components/DarkmodeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {

  const { darkMode, toggleDarkMode } = useDarkmode();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      eassing: 'ease-in-sine',
      delay: 100,
    })
  })
  return (
    <div>
      Contact
    </div>
  )
}

export default Contact
