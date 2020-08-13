import React, { Component } from 'react';

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
                <img className="slider-img" src={s.img} alt={s.title}/>
                <h1>{s.title}</h1>
                <p>
                  {
                    s.description.split(' ').length <= 25 ?  s.description : `${s.description.split(' ').slice(0, 25).join(' ')}...`
                  }
                </p>
              </div>
              <div className={ 
                index === this.props.activeIndex ? 'index' : 'inactive'
              }>
                <em>{`${index + 1}/${landing.length}`}</em>
              </div>
            </div>
          )
        }
      </section>
    )
  }
}

export default Slide;
