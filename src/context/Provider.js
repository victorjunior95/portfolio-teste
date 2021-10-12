import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Portfolio from './Context';
import { fetchDataPortfolio } from '../services';
import { defaultAbout } from './defaultContext';

const Provider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(defaultAbout);
  // const [projects, setProjects] = useState([]);
  // const [contact, setContact] = useState('');

  const aboutMeFetch = async () => {
    const { basics, skills } = await fetchDataPortfolio();
    setAboutMe({basics, skills});
  };

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
    setAboutMe,
    // projects,
    // contact,
    aboutMeFetch,
    // getProjects,
    // getContact
  };

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
