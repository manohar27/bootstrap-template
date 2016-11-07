import React from 'react';

const Footer = props => (
  <div className="footer">
    <input type="checkbox" className="hidden-footer-checkbox" id={`hidden-footer-${props.label.replace(/\s+/g, '')}`} />
    <label htmlFor={`hidden-footer-${props.label.replace(/\s+/g, '')}`} className="group-label">{props.label}
      <span className="plus-icon" />
    </label>
    <ul className="footer-link-group">
      {props.items.map((item, index) => <li className="link" key={index}><a href={item.replace(/\s+/g, '')}>{item}</a></li>)}
    </ul>
  </div>
);

Footer.propTypes = {
  label: React.PropTypes.string.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.string)
};
export default Footer;
