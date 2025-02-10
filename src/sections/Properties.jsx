import React, { useEffect } from 'react'
import { property } from '../components/export'
import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera } from 'react-icons/fa'
import { MdDashboard, MdSpaceDashboard } from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useDarkmode } from '../components/DarkmodeContext'

const Properties = () => {

  const { darkmode, toggleDarkmode } = useDarkmode();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 200
    })
  }, []);


  return (
    <div className={`${darkmode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section id='properties' className='m-auto lg:px-10 px-6 py-20 w-full flex flex-col items-start justify-center gap-10'>
        <div className='flex flex-col justify-center        items-start gap-4'>
          <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>PROPERTIES</h1>
          <h1 data-aos="zoom-in" className='text-black text-4xl font-semibold dark:text-white'>Explore the latest</h1>
        </div>
        <div id='gridbox' className='grid w-full lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10'>
          {
            property.map((item, index) => (
              <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white dark:bg-gray-800 rounded-xl w-full'>
                <div id='imagebox' className='bg-cover bg-center rounded-xl h-[350px] p-2 flex flex-col justify-between items-end ' style={{ backgroundImage: `url(${item.images})` }}>
                  <div id='top' className='flex justify-between items-end w-full '>
                    <div><button type='button' className='px-3 py-1 opacity-60 bg-red-600 text-[13px] hover:bg-white hover:text-black text-white rounded-full' >Featured</button></div>

                    <div className='flex justify-between items-center gap-3'>
                      <button type='button' className='px-3 py-1 text-[13px] bg-red-600 opacity-60  hover:bg-white hover:text-black text-white rounded-full' >Sales</button>
                      <button type='button' className='px-3 py-1 text-[13px] opacity-60  bg-red-600 hover:bg-white hover:text-black text-white rounded-full' >Active</button>
                    </div>
                  </div>
                  <div id='bottom' className='flex justify-between items-end w-full  '>
                    <div className='flex flex-col justify-start items-start gap-2 shadow-stone-300 shadow-sm backdrop-blur-[2px] p-1 rounded-sm cursor-pointer hover:scale-120 hover:translate-x-5 transform transition-transform  '>
                      <div className='items-center justify-start flex gap-2'>
                      <FaUserCircle className='size-4 text-white'/> <h1 className='text-white '>{item.owner}</h1> </div>
                      <div className='flex items-center justify-start gap-2'>
                      <FaMapMarkerAlt className='size-4 text-white' />
                      <h1 className='text-white '>{item.address}</h1>
                    </div></div>
                    <div className='flex justify-center items-center gap-4 opacity-60'>
                      <FaVideo className='size-4 text-white' />
                      <FaCamera className='size-4 text-white' />
                    </div>
                  </div>
                </div>
                <div className='px-6 py-5 flex-col items-start justify-center gap-2 w-full '>
                  <h1 className='text-xl m-1 text-stone-500 font-semibold dark:text-white'>
                    { item.name}
                  </h1>
                  <h1 className='text-2xl m-1 text-orange-600 font-bold dark:text-white'>
                    {item.price}
                  </h1>
                  <p className='dark:text-white m-1 mb-2.5'>{item.about}</p>
                  <div id='icons' className='flex  items-start gap-5 m-1'>
                    <div  className='flex justify-center items-start gap-2' >
                    <FaBed className='size-5 text-red-400'/>
                    <h1 className='dark:text-white'>{item.bed}</h1>
                    </div>
                    <div  className='flex justify-center items-start gap-2' >
                    <FaBath className='size-5 text-red-300'/>
                    <h1 className='dark:text-white'>{item.bath}</h1>
                    </div>
                    <div  className='flex justify-center items-start gap-2' >
                    <MdDashboard className='size-5 text-stone-400'/>
                    <h1 className='dark:text-white'>{item.area}</h1>
                    </div>
                  </div>
                  <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Properties
