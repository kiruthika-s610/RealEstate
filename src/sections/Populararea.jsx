import React, { useEffect } from 'react'
import { useDarkmode } from '../components/DarkmodeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Populararea = () => {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing:'ease-in-out-sine',
      delay: 200
    })
  }, [])

  const { darkMode, toggleDarkMode } = useDarkmode();
  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} `}>
      <section className={`${darkMode ? 'dark bg-gray-800 text-white' : 'light bg-orange-100 '} lg:w-[90%] w-full h-fit m-auto bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-30 gap-20`}>
        <div id='top' className='w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-8'>
          <div>
            <h1 data-aos="zoom-in" className='dark:text-white text-orange-500 text-2xl '>POPULAR AREAS</h1>
            <h1 data-aos="zoom-in" className=' text-[40px] font-semibold leading-15 mt-4 dark:text-white'>Explore most popular areas</h1>
          </div>
          <div className='grid lg:grid-cols-3 col-span-5 grid-cols-1 justify-center items-center gap-6'>
          <div className='populararea1 h-[400px] bg-cover bg-center rounded-xl'  data-aos="slide-left" data-aos-delay="400 ">
          </div>
          <div className='populararea2 h-[400px]  bg-cover bg-center rounded-xl' data-aos="zoom-in" data-aos-delay="800 ">
          </div>
          <div className='populararea3 h-[400px] bg-cover bg-center rounded-xl' data-aos="slide-right" data-aos-delay="1200 ">
          </div>
          </div>
        </div>
<div id='bottom' className='w-full lg:pl-30 grid lg:grid-cols-3 grid-cols-1 lg:justify-end justify-center items-center gap-6'>
  <div data-aos="slide-up" data-aos-delay="400" className='flex justify-center lg:items-center gap-8 w-full'>
    <h1 className='text-7xl font-semibold dark:text-white'>5K</h1>
    <h1>ACTIVE <br /> LISTINGS</h1>
  </div>
  <div data-aos="slide-up" data-aos-delay="400" className='flex justify-center lg:items-center gap-8 w-full'>
    < h1 className='text-7xl font-semibold dark:text-white'>5K</h1>
    <h1>ACTIVE <br /> LISTINGS</h1>
  </div>
  <div data-aos="slide-up" data-aos-delay="400" className='flex justify-center lg:items-center gap-8 w-full'>
    <h1 className='text-7xl font-semibold dark:text-white'>5K</h1>
    <h1>ACTIVE <br /> LISTINGS</h1>
  </div>
</div>
      </section>
    </div>
  )
}

export default Populararea
