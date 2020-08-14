import React from 'react';

import CarouselData from '../../../Carousel/CarouselData/CarouselData';
import Card from '../../../Card/Card';

import './Skills.css'

function Skills() {

  function getAllSkills({ data }) {
    let arr = []
    CarouselData.forEach( item => 
      arr = arr.concat(item.stack).sort()
    )
    return arr;
  }

  return(
    <div className="spacing">
      <h2>Skills</h2>
      {getAllSkills()}
      <div className="skills-container">
        {CarouselData.map( hobby  =>
          <div key={hobby.id} className="card-container">
            <Card
              id={hobby.id}
              title={hobby.title}
              content={hobby.description}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Skills
