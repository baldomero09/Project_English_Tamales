import React from 'react';
import '../components/home.css';
import LogoSloganComponent from '../components/LogoSlogan/LogoSloganComponent';
import ManagementStyleComponent from '../components/ManagementStyle/ManagementStyleComponent';
import OfficeRulesComponent from '../components/OfficeRules/OfficeRulesComponent';
import MentalHeatlhComponent from '../components/MentalHealth/MentalHeatlhComponent';
import LifeLongCoursesComponent from '../components/Life_Long_Courses/LifeLongCoursesComponent';
//import SliderComponent from '../components/Slider/SliderComponent';

const Home = () => {
  return (
    <>
      <section>
        {/* <SliderComponent /> */}
        <h1 className='title_mian'>Gourmet Tamales</h1>
        <LogoSloganComponent/>
        <ManagementStyleComponent/>
        <OfficeRulesComponent/>
        <MentalHeatlhComponent />
        <LifeLongCoursesComponent/>
      </section>
    </>
  );
};

export default Home;