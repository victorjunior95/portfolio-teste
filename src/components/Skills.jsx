import React, { useContext } from 'react';

import './Skills.css';

import Portfolio from '../context/Context';

const Skills = () => {
  const { aboutMe } = useContext(Portfolio);
  const { skills } = aboutMe;

  return (
    <section id="skills">
      {
        skills && skills.map(({name, rating}, index) => (
            <div key={index}>
              <h3>{name}</h3>
                <div className="progress">
                  <div className={rating > 0 ? "step complete" : "step"}>Learning</div>
                  <div className={rating > 1 ? "step complete" : "step"}>Beginner</div>
                  <div className={rating > 2 ? "step complete" : "step"}>Intermediate</div>
                  <div className={rating > 3 ? "step complete" : "step"}>Advanced</div>
                  <div className={rating > 4 ? "step complete" : "step"}>Expert</div>
                </div>
            </div>
          ))
      }
    </section>
  )
};

export default Skills;
