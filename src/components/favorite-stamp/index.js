import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.props.items.map((item, index) => <li key={index} className="favorite-list-item">
              <p>{item}</p>
              <button onClick={() => this.removeFav(item)} className="close-icon" />
            </li>)}
          </ReactCSSTransitionGroup>
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
  items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};
export default FavoriteStamp;
