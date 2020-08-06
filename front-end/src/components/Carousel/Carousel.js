import React, { Component } from 'react';
import Slide from './Slide/Slide';
import data from './CarouselData/CarouselData';
import LeftArrow from './LeftArrow/LeftArrow';
import RightArrow from './LeftArrow/LeftArrow';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      length: data.length
    }
  }
}
