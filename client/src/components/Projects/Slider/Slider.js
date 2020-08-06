import React, { Component } from "react";
// import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import ProjectCard from "../ProjectCard/ProjectCard";

import projects from '../../../testData/projectData.json';
import './Slider.css';


class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };
    return (
      <div>
          <Slider {...settings}>
            {projects.map(project => (
              <div key={project.id}>
                <ProjectCard data={project} />
              </div>
            ))}
          </Slider>
      </div>
    );
  }
}

export default CenterMode;