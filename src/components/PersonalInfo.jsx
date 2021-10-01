/*
import React from 'react';

import profileImg from '../images/profile-picture.png';
import githubIcon from '../images/github.svg';

import './PersonalInfo.css';

const PersonalInfo = () => (
  <aside id="personal-info">
    <img src={profileImg} alt="Minha Foto" width="200px" />
    <h2>Nome Completo</h2>
    <p>Rua da Minha Casa, N, Centro - Belo Horizonte - MG</p>
    <p>(31) 98765-4321</p>
    <p>nome.completo@email.com</p>
    <p>
      <a href="https://github.com/nome.completo" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" width="25px" />
      </a>
    </p>
  </aside>
);

export default PersonalInfo;
*/

// import React, { useContext } from 'react';
import React, { useContext, useEffect } from 'react';
// import React, { useContext, useEffect, useState } from 'react';

import Portfolio from '../context/Context';
import profileImg from '../images/profile-picture.png';
import githubIcon from '../images/github.svg';

import './PersonalInfo.css';

const PersonalInfo = () => {
  // const [data, setData] = useState({});

  const { aboutMe } = useContext(Portfolio);
  const { basics } = aboutMe;

  useEffect(() => {
    // console.log(aboutMe);
    return aboutMe;
  }, [aboutMe]);

  return (
    <aside id="personal-info">
      {console.log(basics)}
      <img src={profileImg} alt="Minha Foto" width="200px" />
      <h2>{aboutMe.name}</h2>
      <p>{aboutMe.region}</p>
      <p>{aboutMe.phone}</p>
      <p>{aboutMe.email}</p>
      <p>
        <a href="https://github.com/nome.completo" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" width="25px" />
        </a>
      </p>
    </aside>
  );
}

export default PersonalInfo;
