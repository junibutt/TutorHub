import React from 'react' 
import logo from './assets/logo.png'

const Navbar = ({onLogout}) => {
  return (
    <div className='flex justify-between items-center'>
      <div>
      <img className='w-24 pt-3 cursor-pointer md:w-35 ' src={logo}></img>
      </div>
      <div>
        <ul className='flex gap-5 pr-4 font-bold cursor-pointer md:text-xl md:gap-7 md:pt-1 text-white'>
          <li className='hover:underline hover:text-white duration-100'><a href='#'>Home</a></li>
          <li className='hover:underline hover:text-white duration-100'><a href='#'>Courses</a></li>
          <li className='hover:underline hover:text-white duration-100'><a href='#'>Our Teachers</a></li>
          <li className='hover:underline hover:text-white duration-100'><a href='#' onClick={onLogout}>LogOut</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar