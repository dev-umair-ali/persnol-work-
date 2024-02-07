import React, { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/WhyUSCarousel.css";

const WhyUSCarousel = memo(() => {
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
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706100363/recent-2_zu8xwd.png"
              alt=""
            />
            <h1>hello</h1>
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706099873/recent-5_vx301z.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706099855/recent-3_dmg7oq.png"
              alt=""
            />
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706099847/recent-1_fmxdi0.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706099711/recent-4_xatacb.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706099847/recent-1_fmxdi0.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main window">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706100363/recent-2_zu8xwd.png"
              alt=""
            />
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706099873/recent-5_vx301z.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706099855/recent-3_dmg7oq.png"
              alt=""
            />
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706099847/recent-1_fmxdi0.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706099711/recent-4_xatacb.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="recent-slide-main">
          <div className="recent-img-main">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706099847/recent-1_fmxdi0.jpg"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
});

const WhyUsArrows = ({ onClick, direction }) => {
  const arrowClass = `why-us-arrows why-us-${direction}`;

  return (
    <div className={arrowClass} onClick={onClick}>
      {direction === "next" ? <span>&gt;</span> : <span>&lt;</span>}
    </div>
  );
};

export default WhyUSCarousel;
