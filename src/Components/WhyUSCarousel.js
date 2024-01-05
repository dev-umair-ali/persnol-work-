import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Flyar from "../assets/Images/Flyar.png";
import "../Styles/WhyUSCarousel.css"
import recen1 from "../assets/Images/recent-1.jpg"
import recen2 from "../assets/Images/recent-2.png"
import recen3 from "../assets/Images/recent-3.png"
import recen4 from "../assets/Images/recent-4.jpg"
import recen5 from "../assets/Images/recent-5.jpg"

function WhyUSCarousel() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    prevArrow: <WhyUsArrows direction="prev" />, // Use WhyUsArrows for the previous arrow
    nextArrow: <WhyUsArrows direction="next" />, // Use WhyUsArrows for the next arrow
  };
  return (
    <div className="recent">
      <Slider {...settings}>
      <div className="recent-slide-main">
      <div className="recent-img-main window">
        <img src={recen1} alt="" />
      </div>
    </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen2 } alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen3} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen4} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen5} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen1} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen2} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen3} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen4} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen5} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen1} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen2} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen1} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen3} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen5} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen4} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen2} alt="" />
        </div>
        </div>
        <div className="recent-slide-main" > 
        <div className="recent-img-main">            
          <img src={ recen1} alt="" />
        </div>
        </div>
      </Slider>
    </div>
  );
}

export default WhyUSCarousel;



const WhyUsArrows = ({ onClick, direction }) => {
  const arrowClass = `why-us-arrows why-us-${direction}`;

  return (
    <div
      className={arrowClass}
      onClick={onClick}
    >
      {direction === 'next' ? <span>&gt;</span> : <span>&lt;</span>}
    </div>
  );
};