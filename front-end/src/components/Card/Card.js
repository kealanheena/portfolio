import React from 'react'

import './Card.css'

const Card = ({ id, title, description, img }) => (
  <div key={id}>
    <img className="card-img" src={img} alt={title}/>
    <div className="content-container">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default Card;
