import React from 'react';
const Carousel = (props) => (
      <div className="carousel-wrapper">
  <span id="target-item-1"></span>
  <span id="target-item-2"></span>
  <span id="target-item-3"></span>
  <div className="carousel-item item-1">
    <a className="arrow arrow-prev" href="#target-item-3"></a>
    <img src="Household.jpg" className="carousel-image" />
    <a className="arrow arrow-next" href="#target-item-2"></a>
    <span className="carousel-label"></span>
    <i className="current-element" />
  </div>
  <div className="carousel-item item-2">
    <a className="arrow arrow-prev" href="#target-item-1"></a>
    <img src="Coffee.jpg" className="carousel-image" />
    <a className="arrow arrow-next" href="#target-item-3"></a>
    <span className="carousel-label"></span>
    <i className="current-element" />

  </div>
  <div className="carousel-item item-3">
    <a className="arrow arrow-prev" href="#target-item-2"></a>
    <img src="beverages.jpg" className="carousel-image" />
    <a className="arrow arrow-next" href="#target-item-1"></a>
    <span className="carousel-label"></span>
    <i className="current-element" />
  </div>
</div>
    );
export default Carousel;
