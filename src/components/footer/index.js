import React from 'react';
const Footer = (props) => (
      <div >
        <input type="checkbox" className="hidden-footer-checkbox" id={"hidden-footer"+"-"+props.label}/>
        <label  htmlFor={"hidden-footer"+"-"+props.label } className="group-label">{props.label}
          <span className="plus-icon" />
        </label>
        <ul className="footer-link-group">
          {props.items.map((item,index) => <li className="link" key={index}><a href="#">{item}</a></li>)}
        </ul>

      </div>
);
export default Footer;
