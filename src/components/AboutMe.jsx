import React from 'react';
// import React, { useEffect } from 'react';

import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
// import { fetchDataPortfolio } from '../services';
// import { fetchAboutMe, fetchProjects, fetchContact } from '../services';

import './AboutMe.css';

const AboutMe = () => {
  // useEffect(() => {
  //   const getDataPortfolio = async () => {
  //     const dataPortfolio = await fetchDataPortfolio();
  //     console.log(dataPortfolio);
  //   };
  //   getDataPortfolio();
  // }, []);
  // useEffect(() => {
  //   const getAboutMe = async () => {
  //     const dataAboutMe = await fetchAboutMe();
  //     console.log(dataAboutMe);
  //   };
  //   const getProjects = async () => {
  //     const dataProjects = await fetchProjects();
  //     console.log(dataProjects);
  //   };
  //   const getContact = async () => {
  //     const dataContact = await fetchContact();
  //     console.log(dataContact);
  //   };
  //   getAboutMe();
  //   getProjects();
  //   getContact();
  // }, []);

  return (
    <section id="about-me">
      <PersonalInfo />
      <Skills />
    </section>
  );
}

export default AboutMe;
