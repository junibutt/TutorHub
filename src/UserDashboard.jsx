import React from 'react';
import Header from './Header';
import Languages from './Languages';
import HowItAllWorks from './HowItAllWorks';
import Cards from './Cards';
import WhyNAboutUs from './WhyNAboutUs';
import SuccessStories from './SuccessStories';
import SignUp from './SignUp';
import Footer from './Footer';

const UserDashboard = ({onLogout}) => {
  return (
    <div>
      <Header onLogout={onLogout} />
      <Languages/>
      <HowItAllWorks/>
      <hr className='text-gray-400 font-bold'></hr>
      <Cards/>
      <hr className='text-gray-400 font-bold'></hr>
      <WhyNAboutUs/>
      <hr className='text-gray-400 font-bold'></hr>
      <SuccessStories/>
      <SignUp/>
      < Footer/>
    </div>
  );
};

export default UserDashboard;
