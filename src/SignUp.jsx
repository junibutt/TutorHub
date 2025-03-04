import React from 'react';
import bgpic from './assets/bgPic.jpg';
import mainpic from './assets/mainpic.jpg';

const SignUp = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgpic})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      ></div>

      {/* Centered content with mainpic on top of bgpic */}
      <div className="relative z-20 flex items-center justify-center h-screen">
        <div className="w-full max-w-4xl px-4 relative">
          {/* Main Image */}
          <img
            src={mainpic} // Use mainpic here
            alt="Main Image"
            className="w-full min-h-[500px] md:min-h-[540px] lg:min-h-[580px] object-cover rounded-lg shadow-lg"
          />
          {/* Text on top of main image */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center text-white">
            <h1 className="font-bold text-sm md:text-2xl whitespace-nowrap lg:text-3xl mb-4 text-black">
              Choose A Teacher For 1-on-1 Lessons.
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-black">
              <u className="font-bold">Start</u> learning a new <br /> language <u className="font-bold">today!</u>
            </h2>
            {/* Button with margin-top to move it down */}
            <button className="mt-10 bg-gray-600 text-white px-7 py-3 rounded-3xl shadow-md hover:bg-pink-600 transition duration-300 md:px-9 md:py-4 md:rounded-4xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;