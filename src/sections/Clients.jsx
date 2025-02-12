import React, { useEffect } from 'react'
import { useDarkmode } from '../components/DarkmodeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { client } from '../components/export'



const Clients = () => {
  const { darkMode, toggleDarkMode } = useDarkmode();
  useEffect(() => {
    Aos.init({
      offset: 100,
      easing: 'ease-in-out-sine',
      duration: 800,
      delay: 200
    })
  }, [])
  return (
    <div>
      <div className={`${darkMode ? 'dark bg-gray-500 text-white ' : 'light bg-transparent'}`}>
        <section className='lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col items-start p-20 gap-20'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 data-aos="zoom-in" className='text-red-500 '>OUR CLIENTS</h1>
            <h1 data-aos="slide-up" className=' text-[40px] font-semibold leading-10'>What our clients saying about us</h1>
          </div>
          <div id='client-box' className='w-[100%] lg:flex hidden h-fit p-10 '>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {client.map((item, index) => (
                <SwiperSlide key={index} className='rounded-xl w-full mb-10'>
                  <div className='text-gray-700 h-fit'>
                    <section className='m-auto justify-center flex flex-col gap-3  items-center p-10 ' >
                      <div className=' flex '>
                        <div className='w-[160px]'>
                          {<img className='rounded-full w-full ' src={item.image} alt='img1' />}
                        </div>
                        <div className='flex flex-col gap-3  w-full justify-center items-center'>
                          <h1 className='text-2xl  font-semibold'>{item.name} </h1>
                          <p className='text-sm text-stone-550'>{item.text}</p>
                        </div>
                      </div>

                      <p className='mt-3 text-sm'>{item.feedback}</p>

                      <div className='flex gap-2 w-fit px-20 text-orange-400 justify-center'>
                        <FaStar /><FaStar /> <FaStar /><FaStar /><FaStar />
                      </div>
                    </section>
                  </div>
                </SwiperSlide>

              ))}
            </Swiper>
          </div>
          <div className=' lg:hidden flex flex-col gap-10 '>
            {client.map((item, index) => (
              <div key={index} className='text-gray-700 bg-white h-fit rounded-xl'>
                <section className='m-auto justify-center flex flex-col gap-3  items-center p-10 ' >
                  <div className=' flex '>
                    <div className='w-[160px]'>
                      {<img className='rounded-full w-full ' src={item.image} alt='img1' />}
                    </div>
                    <div className='flex flex-col gap-3  w-full justify-center items-center'>
                      <h1 className='text-2xl  font-semibold'>{item.name} </h1>
                      <p className='text-sm text-stone-550'>{item.text}</p>
                    </div>
                  </div>
                  <p className='mt-3 text-sm'>{item.feedback}</p>
                  <div className='flex gap-2 w-fit px-20 text-orange-400 justify-center'>
                    <FaStar /><FaStar /> <FaStar /><FaStar /><FaStar />
                  </div>
                </section>
              </div>
            ))}
          </div>

        </section>
      </div>

    </div>
  )
}

export default Clients
