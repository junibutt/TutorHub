import React from 'react';
import { GiGraduateCap } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";

const Cards = () => {
  return (
    <div className='bg-gray-300 pt-20 pb-20'>
      <div className='p-2 md:flex md:flex-row md:p-3 lg:flex lg:flex-row md:space-x-10 lg:space-x-12'>
        {/* Expert Tutors */}
        <div className='flex flex-col mb-10 md:mb-0 items-center'>
          <GiGraduateCap className='text-pink-600 text-3xl' />
          <h1 className='text-lg text-center'>Expert Tutors</h1>
          <p className='text-center'>
            Find the best tutors who provide personalized lessons and guide you towards success.
          </p>
        </div>

        {/* Verified Profiles */}
        <div className='flex flex-col mb-7 md:mb-0 items-center'>
          <MdVerifiedUser className='text-pink-600 text-3xl' />
          <h1 className='text-lg text-center'>Verified Profiles</h1>
          <p className='text-center'>
            Browse verified profiles of expert tutors to ensure quality and trustworthy learning experiences.
          </p>
        </div>

        {/* Pay Per Lesson */}
        <div className='flex flex-col mb-7 md:mb-0 items-center'>
          <BsCashCoin className='text-pink-600 text-3xl' />
          <h1 className='text-lg text-center'>Pay Per Lesson</h1>
          <p className='text-center'>
            Pay per lesson for flexibility, ensuring you only pay for what you truly need.
          </p>
        </div>

        {/* Affordable Prices */}
        <div className='flex flex-col mb-7 md:mb-0 items-center'>
          <AiFillDollarCircle className='text-pink-600 text-3xl' />
          <h1 className='text-lg text-center'>Affordable Prices</h1>
          <p className='text-center'>
            Enjoy quality education at affordable prices, making learning accessible without breaking the bank.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Cards;
