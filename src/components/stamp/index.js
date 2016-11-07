import React from 'react';

const Stamp = props => (
  <div className="col-3 stamp" >
    <a href="/" className="stamp-link">
      <img src={props.imageSrc} alt={props.imageSrc} />
      <span className="stamp-label">{props.title}</span>
    </a>
    {props.children}
  </div>
  );

Stamp.propTypes = {
  title: React.PropTypes.string.isRequired,
  imageSrc: React.PropTypes.string.isRequired,
  children: React.PropTypes.object
};

export default Stamp;
