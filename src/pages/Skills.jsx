import React, { useContext, useState, useEffect } from 'react';

import './Skills.css';

import Portfolio from '../context/Context';

const Skills = () => {
  const [passos, setPassos] = useState('step');

  const { aboutMe } = useContext(Portfolio);
  const { skills } = aboutMe;
  console.log(skills);

  useEffect(() => {
    if (skills.length > 0) {

    }
    return '';
  }, [skills])

  const stepsLevels = ['learning', 'beginner', 'intermediate', 'advanced', 'expert'];

  const handleStep = (level, nameDiv) => {
    if (level === 'Learning' && nameDiv === 'learning') return 'step complete';

    if (level === 'Beginner' && (nameDiv === 'beginner' || nameDiv === 'learning')) return 'step complete';

    if (level === 'Intermediate' && (nameDiv === 'intermediate' || nameDiv === 'beginner' || nameDiv === 'learning')) return 'step complete';

    if (level === 'Advanced' && (nameDiv === 'advanced' || nameDiv === 'intermediate' || nameDiv === 'beginner' || nameDiv === 'learning')) return 'step complete';

    if (level === 'Expert' && (nameDiv === 'expert' || nameDiv === 'advanced' || nameDiv === 'intermediate' || nameDiv === 'beginner' || nameDiv === 'learning')) return 'step complete';

    return "step";
  }

  return (
    <section id="skills">
      {/* <h3>Habilidade 1</h3>
      <div className="progress">
        <div className="step complete">Básico</div>
        <div className="step complete">Intermediário</div>
        <div className="step complete">Avançado</div>
      </div>

      <h3>Habilidade 2</h3>
      <div className="progress">
        <div className="step complete">Básico</div>
        <div className="step complete">Intermediário</div>
        <div className="step">Avançado</div>
      </div>

      <h3>Habilidade 3</h3>
      <div className="progress">
        <div className="step complete">Básico</div>
        <div className="step ">Intermediário</div>
        <div className="step">Avançado</div>
      </div>

      <h3>Habilidade 4</h3>
      <div className="progress">
        <div className="step complete">Básico</div>
        <div className="step complete">Intermediário</div>
        <div className="step complete">Avançado</div>
      </div>

      <h3>Habilidade 5</h3>
      <div className="progress">
        <div className="step complete">Básico</div>
        <div className="step complete">Intermediário</div>
        <div className="step">Avançado</div>
      </div> */}
      {
        skills && skills.map(skill => (
            <div>
              <h3>{skill.name}</h3>
                <div className="progress">
                  {/* <div className={handleStep(skill.level, 'learning')}>Learning</div>
                  <div className={handleStep(skill.level, 'beginner')}>Beginner</div>
                  <div className={handleStep(skill.level, 'intermediate')}>Intermediate</div>
                  <div className={handleStep(skill.level, 'advanced')}>Advanced</div>
                  <div className={handleStep(skill.level, 'expert')}>Expert</div> */}
                  { stepsLevels.map(stepLevel => (
                      <div  ></div>
                    ))
                  }
                </div>
            </div>
          ))
      }
    </section>
  )
};

export default Skills;
