import React from 'react';
import langs from './Languages.json';
import bg from './assets/langs.jpg';

const Languages = () => {
  let languageCards = langs.map((langu, index) => {
    return (
      <div className="p-6" key={index}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-40 flex text-center justify-center flex-col gap-3 md:w-45 lg:w-60">
          <button className="bg-white border-pink-600 rounded-lg px-4 py-2 border-2 mx-auto text-pink-600 hover:bg-gray-100">
            {langu.title}
          </button>
          <p className="mt-4">{langu.header}</p>
          <p>{langu.number_of_tutors}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative flex flex-col pt-16 z-20">
        <div className="flex flex-wrap justify-center mt-[-109px]"> {/* Adjust margin for spacing */}
          {languageCards}
        </div>

        <button className="text-lg text-white bg-pink-500 mt-auto mx-auto mb-6 rounded-lg px-4 py-2">
          Show More +
        </button>
      </div>
    </div>
  );
};

export default Languages;
