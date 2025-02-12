import React, { useEffect } from 'react'
import { service } from '../components/export'
import { useDarkmode } from '../components/DarkmodeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

  const { darkMode } = useDarkmode();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100
    })
  }, [])
  return (
    < div className={`${darkMode ? 'dark bg-black text-white' : 'light bg-transparent'} pb-20`}>
      <section id='services' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-gray-50'} lg:w-[90%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start px-6 py-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 data-aos="zoom-in" className='text-red-500 dark:text-white text-xl'> SERVICES</h1>
          <h1 data-aos="slide-up" className=' dark:text-white leading-10 font-semibold text-[40px]  '>Our Best Services</h1>
        </div>
        <div id="sevice-box" className="grid lg:grid-cols-3 grid-cols-1 justify-center item-center gap-8">
          {
            service.map((item, index) => (
              < div data-aos="zoom-in" data-aos-delay="400" key={index} className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col gap-4 border-b-[5px] justify-center border-sky-200 item-center rounded-xl cursor-pointer hover:shadow-2xl  transform transition-transform duration-900">
                <div className='p-6 rounded-full bg-red-50 w-fit'>
                  <item.icon className='text-cyan-400 size-10  transform hover:scale-110 transition-tramsform duration-300 cursor-pointer' /></div>
                <h1 className='text-black text-[22px] font-semibold dark:text-white'>{item.title}</h1>
                <p className='text-lg text-slate-700'>{item.desc}</p>
                <button className='border-b-2 border-red-600 font-semibold dark:text-white w-fit text-red-500'>READ MORE</button>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Services
