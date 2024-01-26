import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/aimNode-logo.png";
import "../Styles/Header.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeMenu}>
          &times;
        </button>
        <ul>
          <NavLink exact to="/" activeClassName="active" onClick={closeMenu}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
            <li>About</li>
          </NavLink>
          <NavLink to="/services" activeClassName="active" onClick={closeMenu}>
            <li>SERVICES</li>
          </NavLink>
          <NavLink to="/projects" activeClassName="active" onClick={closeMenu}>
            <li>PROJECTS</li>
          </NavLink>
          <NavLink to="/contactus" activeClassName="active" onClick={closeMenu}>
            <li>CONTACT</li>
          </NavLink>
          <NavLink to="/blogs" activeClassName="active" onClick={closeMenu}>
            <li>BLOGS</li>
          </NavLink>
        </ul>
        <div className="contact-us-nbr1">1234566778</div>
      </nav>
      <div className="contact-us-nbr">1234566778</div>
    </header>
  );
};

export default Header;
