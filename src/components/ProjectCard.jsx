import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const handleClick = (e) => {
    if (project.link === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="project-card" data-aos="flip-left">
      <img src={project.image} alt={project.title} className="project-img" />
      <div className="project-overlay">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a
          href={project.link}
          target={project.link === '#' ? '_self' : '_blank'}
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
