import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {FaXmark, FaBars} from 'react-icons/fa6'
import { DarkmodeProvider, useDarkmode } from './DarkmodeContext'
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa'
import Logo from '../logo'

const Header = () => {
  const { darkMode, toggleDarkMode} = useDarkmode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = ()=>{
    setIsMenuOpen(false)
  }
  const navItems = [
    { link : 'Home', path: 'home' },
    { link : 'About', path: 'about' },
    { link : 'Properties', path: 'properties' },
    { link : 'Testimonials', path: 'testimonials' },
    { link : 'Contact', path: 'contact' },
  ]

  return (
    <nav className={`${darkMode ? 'dark bg-black' : 'light bg-stone-50'} flex justify-center gap-4 lg:px-20 px-4 py-4 sticky top-0 z-30`}>
      <Logo/>
      <div id='logo' className='text-blue-400  dark:text-amber-100 text-3xl font-semibold'>Uthira Realtors</div>

      </nav>
  )
}

export default Header
