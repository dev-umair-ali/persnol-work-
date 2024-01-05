// AutoPlayCarousel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/AutoPlayCarousel.css";
import Autoplay1 from "../assets/Images/AutoPlay1.png";
import { FaStar } from "react-icons/fa6";

function AutoPlayCarousel() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    fade: true,
    swipeToSlide: true,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: "linear",
    arrwos:false,
    arrows: false,
  };

  return (
    <div className="auto-play-banner">
      <div className="carousel-content">
        <Slider {...settings}>
          <div className="Auto-play-slides">
            <div className="auto-play-img">
              <img src={Autoplay1} alt="" />
            </div>
            <div className="auto-play-img-text">
            <FaStar />   <FaStar />   <FaStar />   <FaStar />   <FaStar /> 
              <h1>Jashoa Albert</h1>
              <p>
                Working with Aimnode has been a great experience, he always
                tries his best and knows what he is doing. Looking forward to
                future work."
              </p>
            </div>
          </div>
          {/* slides........ */}
          <div className="Auto-play-slides">
            <div className="auto-play-img">
              <img src={Autoplay1} alt="" />
            </div>
            <div className="auto-play-img-text">
            <FaStar />   <FaStar />   <FaStar />   <FaStar />   <FaStar /> 
              <h1>Jashoa Albert111</h1>
              <p>
                Working with Aimnode has been a great experience, he always
                tries his best and knows what he is doing. Looking forward to
                future work."
              </p>
            </div>
          </div>

          <div className="Auto-play-slides">
            <div className="auto-play-img">
              <img src={Autoplay1} alt="" />
            </div>
            <div className="auto-play-img-text">
            <FaStar />   <FaStar />   <FaStar />   <FaStar />   <FaStar /> 
              <h1>Jashoa Albert111</h1>
              <p>
                Working with Aimnode has been a great experience, he always
                tries his best and knows what he is doing. Looking forward to
                future work."
              </p>
            </div>
          </div>

          <div className="Auto-play-slides">
            <div className="auto-play-img">
              <img src={Autoplay1} alt="" />
            </div>
            <div className="auto-play-img-text">
            <FaStar />   <FaStar />   <FaStar />   <FaStar />   <FaStar /> 
              <h1>Jashoa Albert1111</h1>
              <p>
                Working with Aimnode has been a great experience, he always
                tries his best and knows what he is doing. Looking forward to
                future work."
              </p>
            </div>
          </div>

          <div className="Auto-play-slides">
            <div className="auto-play-img">
              <img src={Autoplay1} alt="" />
            </div>
            <div className="auto-play-img-text">
            <FaStar />   <FaStar />   <FaStar />   <FaStar />   <FaStar /> 
              <h1>Jashoa Albert1111</h1>
              <p>
                Working with Aimnode has been a great experience, he always
                tries his best and knows what he is doing. Looking forward to
                future work."
              </p>
            </div>
          </div>

          <div className="Auto-play-slides">
            <div className="auto-play-img">
              <img src={Autoplay1} alt="" />
            </div>
            <div className="auto-play-img-text">
            <FaStar />   <FaStar />   <FaStar />   <FaStar />   <FaStar /> 
              <h1>Jashoa Albert</h1>
              <p>
                Working with Aimnode has been a great experience, he always
                tries his best and knows what he is doing. Looking forward to
                future work."
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlayCarousel;
