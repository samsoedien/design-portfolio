import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './Carousel.css';

class FeatureCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  componentDidMount() {
    this.progressSlideshow();
  }

  progressSlideshow() {
    this.timeout = setTimeout(function () {
      this.next();
      this.progressSlideshow();
    }.bind(this), 3000);
  }

  render() {
    const { activeIndex } = this.state;
    const { articles, level } = this.props;

    const slides = articles.map((article, index) => {
      let { urlToImage, title } = article;

      return (
        <CSSTransition
          key={index}
          classNames="slide"
          timeout={{ enter: 500, exit: 500 }}>
          <div
            key={index}
            className="carousel-item"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave} >
            <div className="image-wrapper">
              <img src={urlToImage} alt={title} />
            </div>
            <div className="carousel-caption d-md-block">
              <h4>{title}</h4>
            </div>
          </div>
        </CSSTransition>
      )
    })

    return (
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <TransitionGroup>
              {slides[activeIndex]}
            </TransitionGroup>
          </div>
          <a className="carousel-control-prev" role="button" onClick={e => this.previouse()}>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" role="button" onClick={() => this.next()}>
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
    );
  }
}

export default FeatureCarousel;
