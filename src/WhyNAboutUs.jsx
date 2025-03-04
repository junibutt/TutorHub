import React from 'react'
import { ImArrowDownRight2 } from "react-icons/im";


const WhyNAboutUs = () => {
  return (
    <div className='bg-gray-300 pb-6 md:flex'>
      <div className='pt-9 pb-25 pl-10 md:pl-18'>
        <p className='text-sm pl-4 pb-5 font-bold md:text-xl'>Why us?</p>
        <h1 className='font-bold text-lg pl-4 pb-5 md:text-xl md:font-extrabold'>Learn a new language online anywhere,anytime!</h1>
        <p className='text-sm pl-4 pb-8 md:text-balance'>Master a new language online, anytime, anywhere, with flexible, personalized lessons.</p>

        <ImArrowDownRight2  className='text-5xl text-pink-600 font-extrabold pl-4 pb-5 '/>
        <h className='pl-4 text-lg md:text-xl'>Customized learning
        </h>
        <p className='pl-4 text-sm pb-7 '>Experience learning tailored to your needs, with lessons designed to fit your unique learning style.</p>

        <ImArrowDownRight2  className='text-5xl text-pink-600 font-extrabold pl-4 pb-5 '/>
        <h className='pl-4 text-lg md:text-xl whitespace-nowrap'>Get Expert Help When You Need It
        </h>
        <p className='pl-4 text-sm pb-7'>Access expert tutors whenever you need assistance, ensuring you get the guidance to succeed.</p>

        <ImArrowDownRight2  className='text-5xl text-pink-600 font-extrabold pl-4 pb-5 '/>
        <h className='pl-4 text-lg md:text-xl '>Learn Anytime, Anywhere
        </h>
        <p className='pl-4 text-sm'>Learn at your own pace, anytime and anywhere, with flexible online lessons available on any device.</p>
        <div>
        </div>
      </div>
      <div >
      <p className='text-sm pl-4 pb-8 font-bold text-center pt-8 md:text-xl'>About Us</p>
      <h1 className='font-bold text-4xl text-center px-2 pb-12'> "We prepare you to achieve your goals with professional tutors." </h1>
      <p className='text-center font-bold text-sm pb-8  md:text-xl'>With our expert tutors, we provide the knowledge, support, and guidance to help you reach your goals.</p>
      <div className='flex justify-center items-center'>
      <button className=' bg-pink-600 text-white px-6 py-2 rounded-3xl md:px-8 md:py-4 md:rounded-5xl '> Read More </button>
      </div>
      </div>
    </div>
  )
}

export default WhyNAboutUs