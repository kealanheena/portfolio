import React from 'react';
import Carousel from '../../../Carousel/Carousel';

import CarouselData from '../../../Carousel/CarouselData/CarouselData';

function Projects() {

  let makersData, otherData;

  makersData = CarouselData.filter( data => {
    return data.makers;
  });

  otherData = CarouselData.filter( data => {
    return !data.makers;
  });

  return (
    <div className="spacing">
      <h2>Projects</h2>
      <h3>Makers Projects</h3>
      <Carousel data={makersData}/>
      <h3>Independant Projects</h3>
      <Carousel data={otherData}/>
    </div>
  );
}

export default Projects;
