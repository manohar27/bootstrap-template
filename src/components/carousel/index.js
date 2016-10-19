import React from 'react';
const Carousel = (props) => (
      <div className="carousel-wrapper">
      {props.imageList.map((item,index) =>
      <div key={index} >
        <span id={"target-item-"+(index+1)}> </span>
        <div className={"carousel-item item-"+(index+1)}>
          <a className="arrow arrow-prev" href={"#target-item-"+((index-1 <0 )? 3:index)}></a>
          <img src={item} className="carousel-image" alt={item}/>
          <a className="arrow arrow-next" href={"#target-item-"+((index+2)>3?1:index+2)}></a>
          <span className="carousel-label"></span>
          <i className="current-element" />
        </div>
      </div>
    )}

    </div>
    );
export default Carousel;
