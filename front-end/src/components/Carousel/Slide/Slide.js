import React, { Component } from 'react';
import data from '../CarouselData/CarouselData';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state ={ landing: data }
  }

  render() {
    return(
      <section>
        {
          this.state.landing.map((s, index) => 
            <div className={
              index === this.props.activeIndex ? 'active' : 'inactive'}
              key={index}>
                <h1>{s.title}</h1>
                <p>{s.description}</p>
            </div>
          )
        }
      </section>
    )
  }
}

export default Slide;
