import React, { Component } from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/BlogCarousel.css";
import blogimg1 from "../assets/Images/Blog -2.png";
import blogimg from "../assets/Images/blog-1.png";



function SlickCarousel() {
    const [currentDate, setCurrentDate] = useState(new Date());
  
    var settings = {
      dots: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      infinite: true,
      nextArrow: <ModifiedBlogArrow direction="next" />,
      prevArrow: <ModifiedBlogArrow direction="prev" />,
      responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3,
        //     infinite: true,
        //     dots: true,
        //   },
        // },
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 2,
        //     initialSlide: 2,
        //   },
        // },
        // {
        //   breakpoint: 480,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //   },
        // },
      ],
    };
  
    const slidesData = [
        {
          id: 1,
          image: blogimg,
          date: currentDate.toLocaleDateString(),
          title: "Unleashing the Power of SEO:",
          description: "Your Gateway to Digital Success with Aimnode Technologies",
        },
        // Add new slides here
        {
          id: 2,
          image: blogimg1,
          date: currentDate.toLocaleDateString(),
          title: "New Slide Title 1",
          description: "Description for the new slide 1",
        },
        {
          id: 3,
          image: blogimg1,
          date: currentDate.toLocaleDateString(),
          title: "New Slide Title 2",
          description: "Description for the new slide 2",
        },
        // Add more slides as needed
      ];
    return (
      <div className="bloggg">
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div className="Slides-main" >
              <div className="slick-blog-img">
                <img src={slide.image} alt="" />
              </div>
              <div className="slick-blog-text">
                <p className="blog-date">{slide.date}</p>
                <h1 className="blog-title">{slide.title}</h1>
                <p className="blog-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  
  export default SlickCarousel;

const ModifiedBlogArrow = ({ onClick, direction }) => {
  return (
    <div
      className={`custom-modified-arrow custom1-${direction}`}
      onClick={onClick}
    >
      {direction === "next" ? <span>&gt;</span> : <span>&lt;</span>}
    </div>
  );
};
