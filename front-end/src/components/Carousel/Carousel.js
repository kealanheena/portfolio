import React, { Component } from 'react';
import Slide from './Slide/Slide';
import data from './CarouselData/CarouselData';
import LeftArrow from './LeftArrow/LeftArrow';
import RightArrow from './RightArrow/RightArrow';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
      length: data.length
    }
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;

    

    if(index < 1) {
      index = length - 1;
    } else {
      index--;
    }

    this.setState({ activeIndex: index });
  }

  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;

    if(index === length - 1) {
      index = 0;
    } else {
      index++;
    }

    this.setState({ activeIndex: index });
  }

  render() {
    return(
      <div className='slider'>
        <div className='slider-items'>
          <LeftArrow
            goToPrevSlide={ this.goToPrevSlide }
          />
          <div className='slider-text'>
            <Slide
              activeIndex={this.state.activeIndex}
            />
          </div>
          <RightArrow
            goToNextSlide={ this.goToNextSlide }
          />
        </div>
      </div>
    )
  }
}

export default Carousel;
