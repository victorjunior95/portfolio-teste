import React, { useContext, useEffect } from 'react';
import { fetchDataPortfolio } from '../services';

import PersonalInfo from '../components/PersonalInfo';
// import Skills from '../components/Skills';
import Skills from './Skills';
import Portfolio from '../context/Context';

import './AboutMe.css';

const AboutMe = () => {
  const { setAboutMe } = useContext(Portfolio);

  useEffect(() => {
      const aboutMeFetch = async () => {
        const { basics, skills } = await fetchDataPortfolio();
        setAboutMe({basics, skills});
      };
    aboutMeFetch();
  }, [setAboutMe]);

  return (
    <section id="about-me">
      <PersonalInfo />
      <Skills />
    </section>
  );
}

export default AboutMe;