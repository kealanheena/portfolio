import React, { Component } from "react";
import Slider from "react-slick";
import Iframe from '../Iframe/Iframe.js';
import projects from '../../projects.json';
import { Container, Card, Button } from 'react-bootstrap';

class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };
    return (
      <div>
        <Container>
          <Slider {...settings}>
            {projects.map(project => (
              <Container>
              <Card className="h-100 shadow-sm bg-dark text-white rounded">
                <Iframe displayedWebsite={project.website}/>
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">
                      {project.title}
                    </Card.Title>
                  </div>
                  <Card.Text className="text-secondary">
                    {project.description}
                  </Card.Text>
                  <Button href={project.github} variant="success">
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
              </Container>
            ))}

          </Slider>
        </Container>
      </div>
    );
  }
}

export default CenterMode;