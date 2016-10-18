import React from 'react';
class Stamp extends React.Component {
  favorited(){
    this.props.favoriteChanged(this.props.title);
  }
  render(){

  return(
      <div className="col-3 stamp" >
      <a className="stamp-link">
        <img src={this.props.image}/>
        <label className="stamp-label">{this.props.title}</label>
        <span className="fav-button" onClick={this.favorited.bind(this)}>
        <i className="heart-icon" />
        </span>
      </a>
    </div>);

}
}
export default Stamp;
