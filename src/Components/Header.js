import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/aimNode-logo.png";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <NavLink exact to="/" activeClassName="active">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            <li>About</li>
          </NavLink>
          <NavLink to="/services" activeClassName="active">
            <li>SERVICES</li>
          </NavLink>
          <NavLink to="/projects" activeClassName="active">
            <li>PROJECTS</li>
          </NavLink>
          <NavLink to="/contactus" activeClassName="active">
            <li>CONTACT</li>
          </NavLink>
          <NavLink to="/blogs" activeClassName="active">
            <li>BLOGS</li>
          </NavLink>
        </ul>
      </nav>
      <div className="contact-us-nbr">1234566778</div>
    </header>
  );
};

export default Header;
