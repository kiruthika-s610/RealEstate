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
    <section id='about' className={`${darkMode ? 'bg-black text-white' : 'bg-transparent'} w-full m-auto lg:px-10 px-5 py-20 grid lg:grid-cols-1 justify-center items-center gap-10`}>
      <div>
        <img data-aos="zoom-in" src="https://unihotel.org/media/upload/hotel_photo/173a27f7-f450-4aa6-98cd-5449444adf71.jpg" alt="about Image" className='rounded-2xl  w-full lg:h-[650px] ' />
      </div>
      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 data-aos='zoom-in' className={`${darkMode ? 'text-yellow-200':'text-red-500'}`}>WHO WE ARE</h1>
        <h1 data-aos='zoom-in' data-aos-delay="200" className={`${darkMode ? 'text-white':'text-black'} text-[40px] font-semibold leading-10 `}>Helping families find their dream homes since 1995. </h1>
        <div data-aos='zoom-in' data-aos-delay="200" className={`text-[18px] font-serif text-justify ${darkMode ? 'text-white' : 'text-black'}`} >
        We are helping clients to buy, sell, and invest in properties with confidence. With expert market knowledge, personalized service, and a passion for excellence, we make every transaction smooth and successful. Whether you’re searching for your dream home or looking to maximize your investment, we are here to guide you every step of the way.        </div>
        <button className='bg-red-700  hover:bg-red-600 transition-transform duration-300 text-white font-semibold rounded-xl p-3 cursor-pointer  hover:scale-110 transition-transform-duration-500'>Read more</button>
        {/* we are more than just a real estate company—we are your trusted partners in finding the perfect place to call home. With years of industry experience, deep market expertise, and a commitment to exceptional service, we help buyers, sellers, and investors navigate the ever-changing real estate landscape with ease.
Our team is dedicated to understanding your unique needs and providing tailored solutions to match your goals. Whether you are looking for a dream home, selling a property, or seeking lucrative investment opportunities, we offer strategic insights, innovative marketing, and strong negotiation skills to ensure the best outcomes.
Integrity, transparency, and client satisfaction are at the heart of everything we do. We believe real estate is more than just transactions—it’s about building lasting relationships and helping our clients achieve financial growth and personal happiness. */}
      </div>
    </section>
  )
}

export default About
