import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Portfolio from './Context';
import { fetchDataPortfolio } from '../services';
import { defaultData } from './defaultContext';

const Provider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(defaultData);
  const [projects, setProjects] = useState(defaultData.projects);
  // const [contact, setContact] = useState('');

  const aboutMeFetch = async () => {
    const { basics, skills } = await fetchDataPortfolio();
    setAboutMe({basics, skills});
  };

  const projectsFetch = async () => {
    const results = await fetchDataPortfolio();
    setProjects(results);
    return results;
  };

  // const contactFetch = async () => {
  //   const results = await fetchDataPortfolio();
  //   setContact(results);
  //   return results;
  // };

  const context = {
    aboutMe,
    setAboutMe,
    projects,
    setProjects,
    // contact,
    // setContact,
    aboutMeFetch,
    projectsFetch,
    // contactFetch
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
