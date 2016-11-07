import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.moveCarousel = this.moveCarousel.bind(this);
    this.state = {carouselIndex: 1};
  }

  moveCarousel(offset) {
    let index = this.state.carouselIndex + offset;
    const len = this.props.imageSrcList.length;
    index = (index > len - 1) ? 0 : index;
    index = (index < 0) ? len - 1 : index;
    this.setState({carouselIndex: index});
  }

  render() {
    return (
      <div className="jscarousel-wrapper">
        <button className="carousel-left" onClick={() => this.moveCarousel(-1)} />
        <span className="carousel-label">{this.props.labelList[this.state.carouselIndex]}</span>
        {this.props.imageSrcList.map((item, index) =>
          <img key={index} className={(this.state.carouselIndex === index) ? 'visible' : 'hidden'} src={item} alt={item} />)}
        <button className="carousel-right" onClick={() => this.moveCarousel(1)} />
        <div className="current-indicator">
          {this.props.imageSrcList.map((item, index) =>
            <span key={index}>
              <input
              id={index}
              onChange={() =>
                this.setState({carouselIndex: index})} checked={this.state.carouselIndex === index}type="radio" name="currentIndicator" />
              <label htmlFor={index} className="carousel-radio">
                <i className="radio-icon" />
              </label>
            </span>)}
        </div>
      </div>);
  }
}

Carousel.propTypes = {
  imageSrcList: React.PropTypes.arrayOf(String).isRequired,
  labelList: React.PropTypes.arrayOf(String)
};

export default Carousel;
