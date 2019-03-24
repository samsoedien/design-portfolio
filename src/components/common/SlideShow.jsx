import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SlideShow.css';

import IMG1 from '../../assets/img/DSC_1753.JPG';
import IMG2 from '../../assets/img/DSC_1875.jpg';


const fadeImages = [
  IMG1,
  IMG2,
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
}

const SlideShow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img className="image" src={fadeImages[0]} />
        </div>
        <h2>First Slide</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image" src={fadeImages[1]} />
        </div>
        <h2>Second Slide</h2>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img className="image" src={fadeImages[2]} />
        </div>
        <h2>Third Slide</h2>
      </div>
    </Fade>
  )
}

export default SlideShow