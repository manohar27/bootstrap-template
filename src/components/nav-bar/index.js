import React from 'react';

const NavBar = props => (
  <nav className={"navbar"}>
    <ul>
      {props.list.map((item, index) => <li key={index}><a href="/" className={"navbar-link"}>{item}</a></li>)}
    </ul>
  </nav>
    );

NavBar.propTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};
export default NavBar;
