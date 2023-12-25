import React from "react";
import logo from "../assets/Images/aimNode-logo.png";
import img from "../assets/Images/astro-about-us.png";
import img3 from "../assets/Images/main-bg.png";

import "../Styles/CircleSlider.css";

export default function CircleAnimation() {
  return (
    <div className="circle-container">
      <div className="moving-elements">
        {/* Your images go here */}
        
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
      </div>
      {/* ... Add more "moving-elements" divs as needed ... */}
      <div className="moving-elements">
        {/* Your images go here */}
       
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
      </div>
      <div className="moving-elements">
        {/* Your images go here */}
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
      </div>
      <div className="moving-elements">
        {/* Your images go here */}
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
      </div>
      <div className="moving-elements">
        {/* Your images go here */}
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
      </div>
      <div className="moving-elements">
        {/* Your images go here */}
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 1" />
      </div>
    </div>
  );
}