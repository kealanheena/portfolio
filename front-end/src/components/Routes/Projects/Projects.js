import React from 'react';
import Carousel from '../../Carousel/Carousel';

import CarouselData from '../../Carousel/CarouselData/CarouselData';

function Homepage() {
  return (
    <div>
      <Carousel data={CarouselData}/>
    </div>
  );
}

export default Homepage;
