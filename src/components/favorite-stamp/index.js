import React from 'react';

class FavoriteStamp extends React.Component {
  constructor(props) {
    super(props);
    this.removeFav = this.removeFav.bind(this);
  }

  removeFav(name) {
    this.props.removeFav(name);
  }
  render() {
    let noFav = '';
    if (this.props.items.length === 0) {
      noFav = (<span className="no-fav">You have no favorites</span>);
    }
    return (
      <div className="favorite-stamp">
        <ul className="favorite-list-group">
          {this.props.items.map((item, index) => <li key={index} className="favorite-list-item">
            <p>{item}</p>
            <button onClick={this.removeFav.bind(this, item)} className="close-icon" />
          </li>)}
        </ul>
        {noFav}
        <div className="my-fav-stamp">
          <p>Favorites</p>
          <img src="fav.png" className="fav-image" alt="Heart Icon" />
        </div>
      </div>
);
}
}
FavoriteStamp.propTypes = {
  removeFav: React.PropTypes.func.isRequired,
  items: React.PropTypes.array.isRequired
};
export default FavoriteStamp;
