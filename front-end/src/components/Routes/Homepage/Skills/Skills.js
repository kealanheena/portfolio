import React from 'react';

import SoftSkills from './SoftSkills/SoftSkills';
import Card from '../../../Card/Card';

import './Skills.css'

function Skills({ data }) {

  function removeDuplicates(array) {
    return array.filter((value, index, array) => {
      return array.indexOf(value) === index;
    });
  }

  function getAllSkills() {
    let arr = []
    data.forEach( item => 
      arr = arr.concat(item.stack).sort()
    )
    return arr;
  }

  let technicalSkills = removeDuplicates(getAllSkills());
  let softSkills = SoftSkills.sort();

  return(
    <div className="spacing">
      <h2>Skills</h2>

      <h3>Soft Skill</h3>
      <div className="skills-container">
        {softSkills.map( (skill, index)  =>
          <div key={index} className="skill-card-container">
            <Card
              title={skill}
            />
          </div>
        )}
      </div>

      <h3>Technical Skills</h3>
      <div className="skills-container">
        {technicalSkills.map( (skill, index)  =>
          <div key={index} className="skill-card-container">
            <Card
              title={skill}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Skills
