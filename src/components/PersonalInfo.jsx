import React, { useContext } from 'react';

import profileImg from '../images/profile-picture.png';
import githubIcon from '../images/github.svg';

import './PersonalInfo.css';

import Portfolio from '../context/Context';

const PersonalInfo = () => {
  const { aboutMe } = useContext(Portfolio);
  const { basics } = aboutMe;

  return (
    <aside id="personal-info">
      <img src={profileImg} alt="Minha Foto" width="200px" />
      <h2>{basics.name}</h2>
      <p>{basics.region}</p>
      <p>{basics.phone}</p>
      <p>{basics.email}</p>
      <p>
        <a href="https://github.com/nome.completo" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" width="25px" />
        </a>
      </p>
    </aside>
  );
}

export default PersonalInfo;
