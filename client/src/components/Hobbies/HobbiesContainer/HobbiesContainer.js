import React from "react";

// import HobbiesCard from "../HobbiesCard/HobbiesCard";
// import Hobbies from '../../../testData/HobbiesData.json';
import { Container, CardColumns } from "react-bootstrap";

// import './HobbiesContainer.css'

const HobbiesContainer = () => {
  return (
    <div id="Hobbies">
      <Container>
        <h2>Hobbies</h2>
        <CardColumns>
          {/* {Hobbies.map( data => (
              // <Col xs={6} className="mb-5" key={`${data.id}`}>
              <div key={`${data.id}`}><HobbiesCard data={data} /></div>
                
              // </Col>
            )
          )} */}
        </CardColumns>
      </Container>
    </div>
  );
}

export default HobbiesContainer;