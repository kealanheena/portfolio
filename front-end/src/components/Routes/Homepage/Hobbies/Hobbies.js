import React from 'react';

import HobbiesData from './HobbiesData/HobbiesData';
import Card from '../../../Card/Card';

import './Hobbies.css'

function Hobbies() {
  return(
    <div className="spacing">
      <h2>Hobbies</h2>
      <div className="hobbies-container">
        {HobbiesData.map( hobby  =>
          <div key={hobby.id} className="card-container">
            <Card
              id={hobby.id}
              title={hobby.title}
              content={hobby.description}
              img={hobby.img}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Hobbies
