import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { useDarkmode } from './DarkmodeContext'
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa'

const Header = () => {
  const { darkMode } = useDarkmode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  const navItems = [
    { link: 'Hero', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Properties', path: 'properties' },
    { link: 'Services', path: 'services' },
    { link: 'Contact Us', path: 'contact us' },
  ]

  return (
    < nav className={`${darkMode ? 'dark bg-gray-700 text-stone-200 ' : 'light bg-stone-50 text-blue-400 '} flex justify-between lg:gap-4 gap-3 lg:px-20 px-3 py-4 sticky top-0 z-30`}>
      <div id='logo' className=' dark:text-amber-100 lg:text-4xl text-2xl font-bold'>Uthira Realtors</div>
      <ul className={`lg:flex hidden justify-center items-center gap-8 ${darkMode ? 'text-stone-100' : 'text-stone-600'} `}>
        {navItems.map(({ link, path }) => (
          <Link key={path} to={path} spy={true} offset={-100} smooth={true} className='text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-red-400  '>
            {link}
          </Link>
        ))}
      </ul>
      <div className={`flex justify-center items-center lg:hidden ${darkMode ? 'text-stone-200' : 'text-gray-700'}`} onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark onClick={closeMenu} className='lg:hidden text-xl cursor-pointer ' />
            : <FaBars className='lg:hidden text-xl cursor-pointer ' />}
        </div>
      </div>
      <div>
        <div className={`w-full h-fit lg:hidden  bg-slate-800 p-4 absolute top-[80px] left-0 ${isMenuOpen ? 'flex' : 'hidden'} `}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} spy={true} offset={-100} smooth={true} className='text-white uppercase font-semibold hover:bg-red-400 w-full text-center cursor-pointer'>
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <div className='flex justify-center items-center lg:gap-3 gap-1 text-m pt-1 lg:text-[16px]'>
          <FaPhoneAlt className='size-4 h-fit flex  text-red-600' />
          <p className='h-fit text-sm w-fit'>+91 12345 67890</p>
          <FaUserCircle className='lg:block hidden size-5 text-red-400' />
        </div>
      </div>
    </nav>
  )
}

export default Header
