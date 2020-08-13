import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state ={ landing: this.props.data }
  }

  wordCount(paragraph, count) {
    if(paragraph.split(' ').length <= count) {
      return paragraph;
    } else {
      return `${paragraph.split(' ').slice(0, 25).join(' ')}...`;
    }
  }

  displayProjectsWeeks(project, index) {
    if(project.makers) {
      return `Week ${index+1}: ${project.title}`;
    } else {
      return project.title;
    }
  }

  render() {

    var { landing } = this.state;

    return(
      <section>
        {
          landing.map((s, index) => 
            <div key={s.id}>
              <div className={ 
                index === this.props.activeIndex  ? 'active' : 'inactive'
              }>
                <img className="slider-img" src={s.img} alt={s.title}/>
                <h3>{ this.displayProjectsWeeks(s, index) }</h3>
                <p> { this.wordCount(s.description, 25) } </p>
                <a className="slider-btn">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
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
