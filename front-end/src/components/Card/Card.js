import React from 'react'

import './Card.css'

function Card({ id, title, content, img }) {

  let imgTag = img ? <img className="card-img" src={img} alt={title}/> : img;

  return(
    <div key={id}>
      {imgTag}
      <div className="content-container">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  )
  };

export default Card;
