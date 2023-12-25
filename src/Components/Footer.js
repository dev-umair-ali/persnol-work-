import React from "react";
import "../Styles/Footer.css";
import logo from "../assets/Images/aimNode-logo.png";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa6";


function Footer() {
  return (
    <div className="footer-main1">
      <div className="footer-main">
        <div className="footer-logo">
          <img src={logo} alt="footer-logo" />
          <p>
            Our comprehensive suite of services is designed to catapult your
            business into the digital spotlight, ensuring that you not only
            stand out but thrive in the competitive online landscape.
          </p>
        </div>
        <div className="footer-usefull-link">
          <h1>usefull</h1>
          <div className="for-bottom-border"></div>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Our Team</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h1>Contact</h1>
          <div className="for-bottom-border" style={{ width: "25%" }}></div>
          <ul>
            <li>201 BMCHS Road Number 16, Bahadur Shah</li>
            <li>Zafar Road, Bahadurabad karachi</li>
            <li>
              <CiMail />
              &nbsp;Info@aimnode.com
            </li>
            <li>
              <BsTelephone />
              &nbsp;(0340)80000012
            </li>
          </ul>
        </div>
        <div className="footer-sign-up">
          <h1>Sign Up</h1>
          <div className="for-bottom-border" style={{ width: "29%" }}></div>
          <ul>
            <li>
              Keep me up to date with content,
              <br /> updates, and offers from Phlox
            </li>
            <li>
              <div className="footer-mail-box">
                <input type="text" name="name"
                placeholder="Enter Your Email"
                />
                <button><FaGreaterThan/></button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="fotter-bottem-text">
        <p>Copyright© Aimnode technologies 2023</p>
      </div>
    </div>
  );
}

export default Footer;
