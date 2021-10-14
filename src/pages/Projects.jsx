import React, { useContext, useEffect } from 'react';
import { fetchDataPortfolio } from '../services';

import Portfolio from '../context/Context';

import './Projects.css';

const Projects = () => {
  const { setProjects, projects } = useContext(Portfolio);

  useEffect(() => {
      const aboutMeFetch = async () => {
        const { projects } = await fetchDataPortfolio();
        setProjects(projects);
      };
    aboutMeFetch();
  }, [setProjects]);

  return (
    <section id="projects">
      <ul>
        {
          projects && projects.map((project, index) => (
            <li key={index}>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <img src={project.images[0].resolutions.thumbnail.url} alt="Imagem do Projeto 1" />
                <h3>{project.displayName}</h3>
                <p>{project.description}</p>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  )
};

export default Projects;
