// import React from 'react';
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import Portfolio from './Context';
import { fetchDataPortfolio } from '../services';
// import { fetchAboutMe, fetchProjects, fetchContact } from '../services';

const Provider = ({ children }) => {
  // const history = useHistory();
  // const redirectPages = (path) => {
  //   history.push(path);
  // };

  // Só preciso fornecer as informações - primeiro parâmetro
  const [aboutMe, setAboutMe] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState('');

  // Uso useEffect que faz o fetch genérico e "seto" nos respectivos estados os resultados que usarei
  useEffect(() => {
      const getAboutMe = async () => {
        const { basics, skills } = await fetchDataPortfolio();
        const dataAboutMe = { basics, skills } // basics: objeto, skills: array de objetos
        setAboutMe(dataAboutMe);
      };
      const getProjects = async () => {
        const { projects } = await fetchDataPortfolio();
        const dataProjects = projects; // array de objetos
        setProjects(dataProjects);
      };
      const getContact = async () => {
        const { basics } = await fetchDataPortfolio();
        const dataContact = basics.phone; // string
        setContact(dataContact);
      };
      getAboutMe();
      getProjects();
      getContact();
  }, []);

  // const aboutMeFetch = async () => {
  //   const results = await fetchAboutMe();
  //   setAboutMe(results);
  //   return results;
  // };

  // const projectsFetch = async () => {
  //   const results = await fetchProjects();
  //   setProjects(results);
  //   return results;
  // };

  // const contactFetch = async () => {
  //   const results = await fetchContact();
  //   setContact(results);
  //   return results;
  // };

  const context = {
    aboutMe,
    projects,
    contact
  };
  // const context = {
  //   aboutMe,
  //   aboutMeFetch,
  //   projects,
  //   projectsFetch,
  //   contact,
  //   contactFetch
  // };

  return (
    <div>
      <Portfolio.Provider value={ context }>
        {children}
      </Portfolio.Provider>
    </div>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
