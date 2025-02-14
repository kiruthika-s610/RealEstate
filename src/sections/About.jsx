import React, { useEffect } from 'react'
import { useDarkmode } from '../components/DarkmodeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    Aos.init({
      offset: 500,
      duration: 3800,
      easing: ' ease-in-sine',
      delay: 200,
    })
  }, [])

  const { darkMode } = useDarkmode();

  return (
    <section id='about' className={`${darkMode ? 'dark bg-black text-white' : 'light bg-transparent'} w-full m-auto lg:px-10 px-5 py-20 grid lg:grid-cols-1 justify-center items-center gap-10`}>
      <div>
        <img data-aos="zoom-in" src="https://unihotel.org/media/upload/hotel_photo/173a27f7-f450-4aa6-98cd-5449444adf71.jpg" alt="about Image" className='rounded-2xl  w-full lg:h-[650px] ' />
      </div>
      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 data-aos='zoom-in' className={`${darkMode ? 'text-yellow-200':'text-red-500'}`}>WHO WE ARE</h1>
        <h1 data-aos='zoom-in' data-aos-delay="200" className={`${darkMode ? 'text-white':'text-black'} text-[40px] font-semibold leading-10 dark:text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <div data-aos='zoom-in' data-aos-delay="200" className={`text-xl text-justify ${darkMode ? 'text-white' : 'text-black'}`} >
          Aliquid expedita iste neque, ullam suscipit molestias reiciendis unde error, facere sed sequi. Quibusdam natus voluptate quod in corporis amet labore ab?
        </div>
        <button className='bg-red-700  hover:bg-red-600 transition-transform duration-300 text-white font-semibold rounded-xl p-3 cursor-pointer  hover:scale-110 transition-transform-duration-500'>Read more</button>
      </div>
    </section>
  )
}

export default About
