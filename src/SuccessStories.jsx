import React from 'react'
import { ImGoogle } from "react-icons/im";
import pic1 from './assets/ss1.jpg'
import pic2 from './assets/ss2.jpg'
import pic3 from './assets/ss3.jpg'
import pic4 from './assets/ss4.jpg'
import pic5 from './assets/ss5.jpg'

const SuccessStories = () => {
  return (
    <div className='bg-gray-300'>

      <div className='pt-10'>
        <h1 className='font-bold text-3xl text-center pb-20'>Our Success Stories</h1>
      </div>


      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6 md:px-12">
        

        <div className='max-w-sm w-full mx-auto shadow-lg rounded-lg flex flex-col items-center mb-10 bg-white p-3'>
          <h1 className='text-2xl font-bold text-center '><ImGoogle  /> 5/5</h1>
          <p className='text-center mt-2 '>Mastered a new language in weeks with personalized lessons, thanks to expert tutors!</p>
          <img className='rounded-full w-24 h-24 mt-4' src={pic1} alt="Success Story" />
          <p className='mt-2 font-semibold'>Rayan Brian</p>
        </div>

        <div className='max-w-sm w-full mx-auto shadow-lg rounded-lg flex flex-col items-center mb-10 bg-white p-3'>
          <h1 className='text-2xl font-bold text-center'><ImGoogle /> 4/5</h1>
          <p className='text-center mt-2'>Achieved fluency by practicing daily, learning anywhere, anytime with flexible online lessons.</p>
          <img className='rounded-full w-24 h-24 mt-4' src={pic2} alt="Success Story" />
          <p className='mt-2 font-semibold'>Max Viley</p>
        </div>

        <div className='max-w-sm w-full mx-auto shadow-lg rounded-lg flex flex-col items-center mb-10 bg-white p-3'>
          <h1 className='text-2xl font-bold text-center'><ImGoogle /> 4/5</h1>
          <p className='text-center mt-2'>Found the perfect tutor who adapted lessons to my unique learning style, successfully!</p>
          <img className='rounded-full w-24 h-24 mt-4' src={pic3} alt="Success Story" />
          <p className='mt-2 font-semibold'>Hassan Ali</p>
        </div>
      </div>

      
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6 md:px-12"> 
        <div className='max-w-sm w-full mx-auto shadow-lg rounded-lg flex flex-col items-center mb-10 bg-white p-3'>
          <h1 className='text-2xl font-bold text-center'><ImGoogle /> 5/5</h1>
          <p className='text-center mt-2'>Thanks to flexible schedules, I balanced learning with work, achieving my language goals.</p>
          <img className='rounded-full w-24 h-24 mt-4' src={pic4} alt="Success Story" />
          <p className='mt-2 font-semibold'>Mingual Jay</p>
        </div>

        <div className='max-w-sm w-full mx-auto shadow-lg rounded-lg flex flex-col items-center mb-10 bg-white p-3'>
          <h1 className='text-2xl font-bold text-center'><ImGoogle /> 5/5</h1>
          <p className='text-center mt-2'>Quick, expert help whenever needed, helped me stay motivated and reach my goals!</p>
          <img className='rounded-full w-24 h-24 mt-4' src={pic5} alt="Success Story" />
          <p className='mt-2 font-semibold'>Fatore Lake</p>
        </div>

      </div>
    </div>
  );
}

export default SuccessStories;
