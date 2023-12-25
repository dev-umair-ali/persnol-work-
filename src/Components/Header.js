import React, { useState } from "react";
import "../Styles/Header.css";
import {NavLink } from "react-router-dom";
import logo from "../assets/Images/aimNode-logo.png"
const Header = () => {
  return (
    <header className="header">
    
        <div className="logo">  <NavLink  to="/"><img src={logo } alt="logo"/> </NavLink ></div>
   
      <nav>
        <ul>
          <NavLink  to="/">
            <li>Home</li>
          </NavLink >
          <NavLink  to="/about">
            <li>About</li>
          </NavLink >
          <NavLink to="/services">
            <li>SERVICES</li>
          </NavLink >

          <NavLink  to="/projects">
            <li>PROJECTS</li>
          </NavLink >
          <NavLink  to="/contactus">
            <li>CONTACT</li>
          </NavLink >
          <NavLink to="/blogs">
            <li>BLOGS</li>
          </NavLink >
        </ul>
      </nav>
      <div className="contact-us-nbr">1234566778</div>
    </header>
  );
};

export default Header;
