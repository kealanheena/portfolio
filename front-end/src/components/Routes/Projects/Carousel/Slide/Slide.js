import React, { Component } from 'react';
// import data from '../CarouselData/CarouselData';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state ={ landing: this.props.data }
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
                <h1>{s.title}</h1>
                <p>{s.description}</p>
              </div>
              <div className={ 
                index === this.props.activeIndex ? 'index' : 'inactive'
              }>
                {`${index + 1}/${landing.length}`}
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

export default Slide;
