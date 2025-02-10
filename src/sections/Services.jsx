import React, { useEffect } from 'react'
import { service } from '../components/export'
import { useDarkmode } from '../components/DarkmodeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

  const { darkmode, toggleDarkmode } = useDarkmode();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100
    })
  }, [])
  return (
    <div className={`${darkmode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
      <section id='services' className={`${darkmode ? 'dark bg-gray-800' : 'light bg-yellow-50'} lg:w-[90%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start px-6 py-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'> SERVICES</h1>
          <h1 data-aos="slide-up" className='text-black dark:text-white leading-10 font-semibold text-[40px]  '>Our Best Services</h1>
        </div>
      </section>


    </div>
  )
}

export default Services
