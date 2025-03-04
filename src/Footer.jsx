import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-gray-300'>
      <div className='md:flex justify-center '>
        <div className='flex pt-13 p-8 gap-30 justify-center lg:justify-center'>
        <div className='text-sm md:pl-16 '><h1>About Us</h1>
        <p className='pt-4 whitespace-nowrap hover:text-gray-600 cursor-pointer transition duration-300'>How It Works</p>
        <p className='hover:text-gray-600 cursor-pointer'>Affiliate Programs</p>
        <p className='hover:text-gray-600 cursor-pointer'>Education Partners</p>
        <p className='whitespace-nowrap hover:text-gray-600 cursor-pointer'>We Are Hiring</p>
        <p className='whitespace-nowrap hover:text-gray-600 cursor-pointer'>Become A Teacher</p>
        </div>
        <div className='text-sm whitespace-nowrap'><h1>Teachers</h1>
        <p className='pt-4 hover:text-gray-600 cursor-pointer transition duration-300'>English Teachers</p>
        <p className='hover:text-gray-600 cursor-pointer transition duration-300'>Arabic Teachers</p>
        <p className='hover:text-gray-600 cursor-pointer transition duration-300'>Japanese Teachers</p>
        <p className='hover:text-gray-600 cursor-pointer transition duration-300'>Chinese Teachers</p>
        <p className='hover:text-gray-600 cursor-pointer transition duration-300'>Many Other Languages</p>
        </div>
        </div>
        <div className='flex pt-13 p-8 gap-30 justify-center pr-30'>
        <div className='text-sm '><h1>Support</h1>
        <p className='pt-4 hover:text-gray-600 cursor-pointer transition duration-300'>Need Any Help?</p>
        <p className='hover:text-gray-600 cursor-pointer transition duration-300'>contact@info.com</p>
        </div>
        <div className='text-sm'><h1 className='pb-4'>Follow Us</h1>
        <CiFacebook className='text-pink-600 text-xl cursor-pointer' />
        <AiOutlineYoutube className='text-pink-600 text-xl cursor-pointer'/>
        <RiInstagramLine className='text-pink-600 text-xl cursor-pointer'/>
        <RiTwitterXLine className='text-pink-600 text-xl cursor-pointer'/>
        </div>
        </div>
      </div>
      <div>
        <div className='text-sm text-center'><h1 className='pb-4'>Contact</h1>
        <p className='pb-1 text-sm hover:text-gray-600 cursor-pointer transition duration-300 '>923-232-2313</p>
        <p className='pb-10 text-sm hover:text-gray-600 cursor-pointer transition duration-300'>123 Fourth Avenue,Pakistan,Islamabad 10292</p>
        </div>
        </div>
      <hr/>
      <div className='flex justify-between p-2 lg:px-4'>
        <div><p className='text-xs md:text-sm lg:text-base '>Copyright © 2025 Language Tutors</p></div>
        <div ><p className='text-xs md:text-sm lg:text-base'>Powered by Language Tutors </p></div>
      </div>
    </div>
  )
}

export default Footer