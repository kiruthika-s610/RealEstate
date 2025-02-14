import React, { useEffect } from 'react'
import { useDarkmode } from '../components/DarkmodeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(() => {
    Aos.init({
      offset: 500,
      duration: 800,
      easing: ' ease-in-sine',
      delay: 200,
    })
  }, [])

  const { darkMode } = useDarkmode();

  return (
    <>
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
        <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center items-end  rounded-xl flex  flex-col lg:px-28 pr-5 px-10 pl-40 gap-7 z-20 '>
          <h1  className="text-6xl text-white font-semibold   pt-20 lg:leading-[90px] leading-[70px] mb-12">Find your new Home </h1>
          <div data-aos="zoom-in" className='text-zinc-100 lg:block hidden items-end text-xl lg:pl-[65%] pl-[15%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        </section>
      </div>
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
        <div data-aos="zoom-in" id='form' className={`${darkMode ? 'dark bg-gray-800 text-white' : 'light bg-white text-black'} lg:w-[70%] w-full m-auto justify-center items-center flex gap-20 p-3 -mt-14 rounded-xl `}>
          Location  <p className='bg-gray-100 p-2 px-10 rounded-xl text-cyan-600 justify-center items-center'> Coimbatore</p>
        </div>
      </div>
    </>
  )
}

export default Hero
