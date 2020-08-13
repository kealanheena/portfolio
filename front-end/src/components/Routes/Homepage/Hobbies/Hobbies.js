import React from 'react';

import HobbiesData from './HobbiesData/HobbiesData';

function Hobbies() {
  return(
    <div>
      <h3>Hobbies</h3>
      {HobbiesData.map( hobby  => 
        <div key={hobby.id}>
          <h4>{hobby.title}</h4>
          <p>{hobby.description}</p>
        </div>
      )}
    </div>
  )
}

export default Hobbies
