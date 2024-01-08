import React from 'react'
import './project.css'

function ProjectCard({ img, name, description, demoUrl }) {
    return (
      <div className="project-card">
        <img src={img} alt="Project Image" className="project-image"/>
        <div className="project-details">
          <h2 className="project-name">{name}</h2>
          <p className="project-description">{description}</p>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="demo-button">View Demo</a>
        </div>
       
      </div>
    );
  }
  
  export default ProjectCard;

