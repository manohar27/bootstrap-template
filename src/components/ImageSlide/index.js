import React from 'react';

const ImageSlide = props => (
  <div className="image-slide">
    <img src={props.image} key={props.image} alt={props.description} />
    <span className="carousel-label">{props.image.split('.')[0]}</span>
  </div>
);

ImageSlide.propTypes = {
	image: React.PropTypes.string.isRequired,
	description: React.PropTypes.string,
	className: React.PropTypes.string.isRequired
};
export default ImageSlide;