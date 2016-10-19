import React from 'react';
import NavBar from '../nav-bar';
const Header = (props) => (
        <div className="header">
          <a href="#" className="logo">{props.logo}</a>
          <input type="checkbox" className="checkBox-hidden" id="mobileMenu" />
          <label className="mobileMenu" htmlFor="mobileMenu">&#9776;</label>
          <NavBar list={props.navList}/>
          <span className="navbar-right">
            <a href="#" className="login-button">
              <i className="login-icon" />
              Login
            </a>
          </span>
        </div>
      );

export default Header;
