import React from 'react';
import work from './assets/howitworks.jpg';

const HowItAllWorks = () => {
  return (
    <div className="bg-gray-300 pb-10">
      
      <div className="lg:px-40">
        
        <div className="text-center pt-10 lg:pt-19">
          <h1 className="font-bold text-lg lg:text-2xl">How IT All Works?</h1>
          <p className="pt-4 px-2 lg:text-xl"> 
            Web learning enhances interaction, engagement,<br/> and personalized knowledge acquisition.
          </p>
          <p className="font-bold text-lg lg:hidden">____________________</p>
        </div>

        
        <div className="md:flex md:items-start md:pt-8 lg:flex lg:items-center lg:justify-between">
         
          <div className="md:w-1/2 md:pr-8 lg:w-1/3 lg:flex lg:justify-center">
            <img
              className="w-[60%] h-[50%] mx-auto rounded-full shadow-2xl md:w-[80%] md:h-[50%] lg:w-[150%] lg:h-auto lg:max-w-none"
              src={work}
              alt="How it works"
            />
          </div>

          
          <div className="md:w-1/2 md:pl-9 lg:w-1/3 lg:pl-8 lg:pt-25">
            
            <div className="flex items-center flex-col pt-5 md:pt-0 md:items-start lg:items-start">
              <button className="px-12 py-5 text-pink-600 font-extrabold text-4xl bg-white rounded-4xl shadow-2xl md:rounded-full md:w-16 md:h-16 md:p-0 ">
                1
              </button>
              <h1 className="font-bold text-xl pt-7 pl-3 md:pt-3">Find the perfect tutor</h1>
              <p className="pt-2 pl-3 text-center md:text-left">Discover the ideal tutor who matches your learning style.</p>
            </div>

            
            <div className="flex justify-center items-center pt-7 flex-col md:items-start lg:items-start">
              <button className="px-12 py-5 text-pink-600 font-extrabold text-4xl bg-white rounded-4xl shadow-2xl md:rounded-full md:w-16 md:h-16 md:p-0">
                2
              </button>
              <h1 className="font-bold text-xl pt-7 pl-3 md:pt-3">Schedule Your Lesson</h1>
              <p className="pt-2 pl-3 text-center md:text-left">Schedule your lesson at your convenience for flexible learning.</p>
            </div>

            
            <div className="flex justify-center items-center pt-7 flex-col pb-35 md:items-start lg:items-start">
              <button className="px-12 py-5 text-pink-600 font-extrabold text-4xl bg-white rounded-4xl shadow-2xl md:rounded-full md:w-16 md:h-16 md:p-0">
                3
              </button>
              <h1 className="font-bold text-xl pt-7 pl-3 md:pt-3">Start The Journey!</h1>
              <p className="pt-2 pl-3 text-center md:text-left">Don't get late. Just buckle up and register now!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItAllWorks;