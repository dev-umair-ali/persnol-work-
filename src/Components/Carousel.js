import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import download from "../assets/Images/Vector Smart Object.png";
import download1 from "../assets/Images/dfgasd.png";
import download2 from "../assets/Images/dfggd.png";
import "../Styles/Carousel.css";

function Carousel() {
  const settings = {

    dots: false,
    // centerMode: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
 
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download} alt="" />
          </div>
          <div className="Slider-text">
            <h1>Innovation:</h1>
            <p>
              We thrive on innovation and are constantly at the forefront of
              digital marketing trends. Our forward-thinking approach ensures
              that your
            </p>
          </div>
        </div>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download} alt="" />
          </div>
          <div className="Slider-text">
            <h1>Innovation:</h1>
            <p>
              We thrive on innovation and are constantly at the forefront of
              digital marketing trends. Our forward-thinking approach ensures
              that your
            </p>
          </div>
        </div>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download} alt="" />
          </div>
          <div className="Slider-text">
            <h1>Innovation:</h1>
            <p>
              We thrive on innovation and are constantly at the forefront of
              digital marketing trends. Our forward-thinking approach ensures
              that your
            </p>
          </div>
        </div>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download} alt="" />
          </div>
          <div className="Slider-text">
            <h1>Innovation:</h1>
            <p>
              We thrive on innovation and are constantly at the forefront of
              digital marketing trends. Our forward-thinking approach ensures
              that your
            </p>
          </div>
        </div>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download} alt="" />
          </div>
          <div className="Slider-text">
            <h1>Innovation:</h1>
            <p>
              We thrive on innovation and are constantly at the forefront of
              digital marketing trends. Our forward-thinking approach ensures
              that your
            </p>
          </div>
        </div>
        <div className="Slide-1">
          <div className="slider-img">
            <img src={download} alt="" />
          </div>
          <div className="Slider-text">
            <h1>Innovation:</h1>
            <p>
              We thrive on innovation and are constantly at the forefront of
              digital marketing trends. Our forward-thinking approach ensures
              that your
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;





const CustomArrow = ({ onClick, direction }) => {
    return (
      <div
        className={`custom-arrow custom-${direction}`}
        onClick={onClick}
      >
        {direction === 'next' ? <span>&gt;</span> : <span>&lt;</span>}
      </div>
    );
  };
  
