import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import SampleCard from "../Components/card";
import { config } from "react-spring";
import zab from "../assets/Images/zab.png";
import shy from "../assets/Images/shy.jpg";
import aws from "../assets/Images/aws.png";
import "../Styles/AboutUsCarousel.css";

function AboutUsCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    {
      key: 1,
      content: <SampleCard imageUrl={zab} title="Image 1" />,
    },
    {
      key: 2,
      content: <SampleCard imageUrl={shy} title="Image 2" />,
    },
    {
      key: 3,
      content: <SampleCard imageUrl={aws} title="Image 3" />,
    },
    // ... other slides
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Adjust interval duration as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ width: "60%", height: "500px", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={currentSlideIndex} // Fix the prop name here
        animationConfig={config.gentle}
        // showNavigation
      />
    </div>
  );
}

export default AboutUsCarousel;
