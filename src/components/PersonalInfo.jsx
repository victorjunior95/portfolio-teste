import React, { useContext } from 'react';

import githubIcon from '../images/github.svg';

import './PersonalInfo.css';

import Portfolio from '../context/Context';

const PersonalInfo = () => {
  const { aboutMe } = useContext(Portfolio);
  const { basics } = aboutMe;
  const githubURL = basics.profiles.length > 0 ? basics.profiles[1].url : null;

  return (
    <aside id="personal-info">
      <img src={basics.image} alt="Minha Foto" width="200px" />
      <h2>{basics.name}</h2>
      <p>{basics.region}</p>
      <p>{basics.phone}</p>
      <p>{basics.email}</p>
      <p>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" width="25px" />
        </a>
      </p>
    </aside>
  );
}

export default PersonalInfo;
