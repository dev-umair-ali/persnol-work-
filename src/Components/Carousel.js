import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import download from "../assets/Images/download.jpeg";
import download1 from "../assets/Images/download1.jpeg";
import download2 from "../assets/Images/download2.jpeg";
import "../Styles/slick.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    dots: false,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download} alt="" />
          </div>
          <div className="Slider-text">
            <p></p>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download2} alt="" />
          </div>
          <div className="Slider-text">
            <p></p>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download} alt="" />
          </div>
          <div className="Slider-text">
            <p></p>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download1} alt="" />
          </div>
          <div className="Slider-text">
            <p></p>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download2} alt="" />
          </div>
          <div className="Slider-text">
            <p></p>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download} alt="" />
          </div>
          <div className="Slider-text">
            <p></p>
            <h1></h1>
            <p></p>
          </div>
        </div>
      </Slider>
      <div className="carousle-main"></div>
    </div>
  );
}

export default Carousel;
