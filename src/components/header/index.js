import React from 'react';
import NavBar from '../nav-bar';
const Header = (props) => (

        <div className="header">
        <span className="logo">{props.logo}</span>
        <span className="navbar-right">
          <a href="#" className="login-button">
            <i className="login-icon" />
            Login
          </a>
        </span>
        <input type="checkbox" className="checkBox-hidden" id="mobileMenu" />
        <label className="mobileMenu" htmlFor="mobileMenu">&#9776;</label>
        <NavBar list={props.navList}/>
        </div>
      );

export default Header;
