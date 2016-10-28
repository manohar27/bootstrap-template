import React from 'react';

class Stamp extends React.Component {
  constructor(props) {
    super(props);
    this.favorited = this.favorited.bind(this);
  }
  favorited() {
    this.props.favoriteChanged(this.props.title);
  }
  render() {

  return (
    <div className="col-3 stamp" >
      <a href="/" className="stamp-link">
        <img src={this.props.image} alt={this.props.image} />
        <span className="stamp-label">{this.props.title}</span>
      </a>
      <button className="fav-button" onClick={this.favorited} />
      <i className="heart-icon" />
    </div>
  );

}
}
Stamp.propTypes = {
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  favoriteChanged: React.PropTypes.func.isRequired
};
export default Stamp;
