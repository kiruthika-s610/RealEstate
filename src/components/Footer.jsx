import React from 'react'
import { FaArrowUp, FaSun, FaMoon, FaMobile, FaFax } from 'react-icons/fa'
import { useDarkmode } from './DarkmodeContext'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaBuilding } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'


const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkmode();

  return (
    <div>
      <footer id="contact us" className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid  lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`} >
        <div className='flex flex-col justify-center items-start gap-6'>
          <h1 className='text-white text-2xl font-semibold'>About Us</h1>
          <p className='text-slate-200 text-justify text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, fuga. Aut placeat modi minima in quod aspernatur ipsum quo minus.</p>
          <div id='social-icons' className='flex justify-center gap-3 items-center'>
            <div className='p-3 rounded-xl bg-white hover:bg-sky-300 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaFacebookF className='size-4' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaInstagram className='size-4' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-sky-300 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaTwitter className='size-4' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaYoutube className='size-4' />
            </div>
          </div>
          <h1 className='text-white mt-8'>Copyrights Uthira Realtors, All Rights Reserved.</h1>
        </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold '>Contact Us </h1>
          <div className='flex justify-center items-center gap-3 text-white '>
            <FaBuilding className='text-white size-5' />
            <p>Address..........</p>
          </div>
          <div className='flex justify-center items-center gap-3 text-white '>
            <FaMobile className='text-white size-5' />
            <p>+91 12345 6789</p>
          </div>
          <div className='flex justify-center items-center gap-3 text-white '>
            <FaFax className='text-white size-5' />
            <p>123456789</p>
          </div>
          <div className='flex justify-center items-center gap-3 text-white '>
            <IoMdMail className='text-white size-5' />
            <p>demo@gmail.com</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-5 text-white'>
          <h1 className='font-semibold text-2xl '>Latest Properties</h1>
          <div className='flex justify-center items-center gap-3'>
            <img src='https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' className='w-[120px] rounded-lg tranform hover:scale-110 
            transition-transform duration-300 cursor-pointer' />
            <div>
              <h1>Villa with amazing price</h1>
              <p className='text-stone-400'> 80 Lakhs</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <img src='https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' className='w-[120px] rounded-lg tranform hover:scale-110 
            transition-transform duration-300 cursor-pointer' />
            <div>
              <h1>Villa with amazing price</h1>
              <p className='text-stone-400'> 80 Lakhs</p>
            </div>
          </div>
        </div>
      </footer>
      <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed  lg:bottom-12 bottom-6 right-13 '>
        <Link to='hero' spy={true} smooth={true}>
          <FaArrowUp className='text-white' />
        </Link>
      </div>
      <div>
        <button onClick={toggleDarkMode} className='flex item-center fixed p-4 rounded-full bg-orange-400 lg:top-52 right-13 top-26 '>
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  )
}

export default Footer
