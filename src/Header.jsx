import React from 'react'
import learn from './assets/learning.webp'
import Navbar from './Navbar'
import { FaArrowCircleDown } from "react-icons/fa";

const Header = ({onLogout}) => {
  return (
    <div
          className="bg-cover bg-center bg-no-repeat min-h-screen"
          style={{ backgroundImage: `url(${learn})` }}
        >
          <Navbar onLogout={onLogout}/>
          <p className='text-white text-center pt-30 font-bold text-2xl lg:text-5xl'>Looking For A Language Tutor?</p>

          <p className='text-white font-bold text-center pt-9 text-4xl lg:text-6xl'> Start <u>Learning</u> a new <br/>
          language today <u>with the</u> <br/>
         <u>best</u> online tutor. </p>

         <p className='text-center pt-25 flex justify-center md:pt-14 md:text-6xl'><FaArrowCircleDown className='text-white text-center text-4xl'/></p>
        </div>
  )
}

export default Header