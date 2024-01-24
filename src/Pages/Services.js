import React from "react";
import "../Styles/Services.css";
import box1 from "../assets/Images/box1.png";
import box2 from "../assets/Images/box2.png";
import box3 from "../assets/Images/box3.png";
import box4 from "../assets/Images/box4.png";
import ServicesAccordion from "../Components/ServicesAccordion";
import Footer from "../Components/Footer";

function Services() {
  return (
    <div className="services-main">
      <div className="services-top-text">
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.{" "}
        </p>
      </div>

      {/* =============oure services Hero==================== */}
      <div className="services-hero-main">
        <div className="services-Hero-text">
          <h1>oure aservices</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exeraacitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="services-Hero-boxes">
          <div className="box-wraper">
            <div className="hero-box1 h-box">
              <img src={box1} alt="" />
              <p>application</p>
            </div>
            <div className="hero-box2 h-box">
              <img src={box2} alt="" />
              <p>BRanding</p>
            </div>
          </div>
          <div className="box-wraper2">
            <div className="hero-box3 h-box">
              <img src={box3} alt="" />
              <p>Design</p>
            </div>
            <div className="hero-box4 h-box">
              <img src={box4} alt="" />
              <p>Website</p>
            </div>
          </div>
        </div>
      </div>
      <div className="services-acro">
        <ServicesAccordion />
      </div>

      <Footer />
    </div>
  );
}

export default Services;
