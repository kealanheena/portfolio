import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state ={ projects: this.props.data }
  }

  getProjectDescription(paragraph, count) {
    if(paragraph.split(' ').length <= count) {
      return paragraph;
    } else {
      return `${paragraph.split(' ').slice(0, 25).join(' ')}...`;
    }
  }

  getProjectTitle(project, index) {
    if(project.makers) {
      return `Week ${index+1}: ${project.title}`;
    } else {
      return project.title;
    }
  }

  getButtonClass(project) {
    if(project.website) {
      return 'slider-btn';
    } else {
      return 'slider-btn disabled'
    }
  }

  render() {

    var { projects } = this.state;

    return(
      <section>
        {
          projects.map((project, index) => 
            <div key={project.id}>
              <div className={ 
                index === this.props.activeIndex  ? 'active' : 'inactive'
              }>
                <img className="slider-img" src={project.img} alt={project.title}/>
                <h3>{ this.getProjectTitle(project, index) }</h3>
                <p> { this.getProjectDescription(project.description, 25) } </p>
                <div className="slider-btn-container">
                  <a href={project.github} className="slider-btn">
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                  <a href={project.website} className={this.getButtonClass(project)}>
                    <FontAwesomeIcon icon={faLink}/>
                  </a>
                </div>
              </div>
              <div className={ 
                index === this.props.activeIndex ? 'index' : 'inactive'
              }>
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

export default Slide;
