  
import React from 'react'
import ProjectCard from './ProjectCard'
import '../styles/Projects.css'
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'A modern e-commerce site built with React and Firebase.',
    image: project1,
    link: 'https://example.com/project1',
  },
 {
  title: 'Movie App',
  description: 'A modern web app for browsing, searching, and discovering movies using real-time API data.',
  image: project2,
  link: 'https://example.com/project2',
  },

  {
    title: 'Portfolio Site',
    description: 'My personal portfolio built with Vite and plain CSS.',
    image: project3,
    link: 'https://example.com/project3',
  },
]

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
