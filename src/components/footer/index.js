import React from 'react';

const Footer = props => (
  <div>
    <input type="checkbox" className="hidden-footer-checkbox" id={`hidden-footer-${props.label.replace(/\s+/g, '')}`} />
    <label htmlFor={`hidden-footer-${props.label.replace(/\s+/g, '')}`} className="group-label">{props.label}
      <span className="plus-icon" />
    </label>
    <ul className="footer-link-group">
      {props.items.map((item, index) => <li className="link" key={index}><a href={item}>{item}</a></li>)}
    </ul>

  </div>
);

Footer.propTypes = {
  label: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired
};
export default Footer;
