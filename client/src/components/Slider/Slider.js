import React, { Component } from "react";
import Slider from "react-slick";
// import ProjectCard from '../Cards/Project';
import projects from '../../projects.json';

class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div>
        <Slider {...settings}>
          {projects.map(project => (
            <div>
              <h3>{project.id}</h3>
              <p>{project.title}</p>
              <p>{project.description}</p>
              <p>{project.github}</p>
              <p>{project.website}</p>
            </div>
          ))}

        </Slider>
      </div>
    );
  }
}

export default CenterMode;