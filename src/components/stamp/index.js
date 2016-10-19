import React from 'react';
class Stamp extends React.Component {
  favorited(){
    this.props.favoriteChanged(this.props.title);
  }
  render(){

  return(
      <div className="col-3 stamp" >
      <a href="#" className="stamp-link">
        <img src={this.props.image} alt={this.props.image}/>
        <span className="stamp-label">{this.props.title}</span>
        <span className="fav-button" onClick={this.favorited.bind(this)}>
        <i className="heart-icon" />
        </span>
      </a>
    </div>);

}
}
export default Stamp;
