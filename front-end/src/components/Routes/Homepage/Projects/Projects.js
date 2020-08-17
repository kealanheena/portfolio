import React from 'react';
import Carousel from '../../../Carousel/Carousel';

function Projects({ data }) {

  let makersData, otherData;

  makersData = data.filter( project => {
    return project.makers;
  });

  otherData = data.filter( project => {
    return !project.makers;
  });

  return (
    <div className="spacing">
      <h2>Projects</h2>
      <h3>Makers Projects</h3>
      <Carousel data={makersData}/>
      <h3>Independent Projects</h3>
      <Carousel data={otherData}/>
    </div>
  );
}

export default Projects;
