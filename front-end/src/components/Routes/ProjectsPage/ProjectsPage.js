import React, { useState, useEffect } from 'react';

import './ProjectsPage.css'

function ProjectsPage({ match }) {
  useEffect(() => {
    fetchItem();
  })

  const [project, setProject] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch (
      `http://localhost:3001/projects/${match.params.id}`
    )

    const project = await fetchItem.json();
    setProject(project);
  };

  return (
    <div className="container projects-page-container">
      <h1>{project.title}</h1>
      <img
        className="project-image"
        src={`http://localhost:3001/${project.projectImage}`}
        alt={project.title}
      />
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectsPage;
