import React from 'react';
const FavoriteStamp = (props) => (
  <div className="favorite-stamp">
    <ul className="favorite-list-group">
      {props.items.map((item,index) => <li key={index} className="favorite-list-item">{item} </li>)}
    </ul>
    <div className="my-fav-stamp">
      <p>Favorites</p>
      <img src="fav.png" className="fav-image" />
    </div>
  </div>
);
export default FavoriteStamp;
