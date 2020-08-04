import React, { Component } from "react";

import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import { MDBContainer } from "mdbreact";

import projects from '../../../testData/projectData.json'; 
import "./ProjectsContainer.css";

// const ProjectsContainer = () => {
//   const scrollContainerStyle = { maxHeight: "450px" };
//   return (
    // <div className="section-container" id="projects">
    //   <Container>
    //     <h2>Projects</h2>
    //     <MDBContainer>
    //       <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
    //         <Container>
    //           <Row>
    //             {projects.map( data => (
    //               // <div id={data.name}>
    //               <Col xs={6} className="mb-5" key={`${data.id}`}>
    //                 <div id={data.title.replace(/\s/g,'')}>
    //                   <ProjectCard data={data} />
    //                 </div>
    //               </Col>
    //               // </div>
    //             )
    //             )}
    //           </Row>
    //         </Container>
    //       </div>
    //     </MDBContainer>
    //   </Container>
    // </div>
//   );
// }

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      apiResponse: []
    }
  }

  callAPI() {
    fetch('http://localhost:3001/projects')
      .then(res => res.json() )
      .then(res => {
        this.setState({ 
          isLoaded: true,
          apiResponse: res 
        }) }
      )
      
      // .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const scrollContainerStyle = { maxHeight: "450px" };
    var { isLoaded, apiResponse } = this.state;

    if(!isLoaded) {
      return (
        <div>
          Loading . . .
        </div>
      )
    } else {
    return(
      <div className="section-container" id="projects">
      <Container>
        <h2>Projects</h2>
        <MDBContainer>
          <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
            <Container>
              <Row>
                {apiResponse.map( data => (
                  <div key={data._id}>
                  <Col xs={6} className="mb-5">
                    <div id={data.title.replace(/\s/g,'')}>
                      <ProjectCard data={data} />
                    </div>
                  </Col>
                  </div>
                )
                )}
              </Row>
            </Container>
          </div>
        </MDBContainer>
      </Container>
    </div>
    )
                }
  }
}

export default ProjectsContainer;