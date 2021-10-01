import React from 'react';
// import React, { useContext, useEffect } from 'react';

import PersonalInfo from '../components/PersonalInfo';
import Skills from '../components/Skills';
// import Portfolio from '../context/Context';

import './AboutMe.css';

const AboutMe = () => {
  // const { aboutMe } = useContext(Portfolio);

  // useEffect(() => {
  //   console.log(aboutMe);
  //   return aboutMe;
  // }, [aboutMe]);

  return (
    <section id="about-me">
      <PersonalInfo />
      <Skills />
    </section>
  );
}

export default AboutMe;