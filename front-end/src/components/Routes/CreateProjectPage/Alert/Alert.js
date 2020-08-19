import React from 'react';

import './Alert.css';

function Alert(props) {

  return (
    <div className="alert">
      <span className="closebtn" onClick={props.handleClick}>&times;</span> 
      <strong>Success</strong> Project has been saved to the Database.
    </div>
  );
}

export default Alert;