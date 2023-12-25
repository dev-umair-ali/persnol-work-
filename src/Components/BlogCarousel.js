// BlogCarousel.js
import React, { useState } from 'react';
import '../Styles/BlogCarousel.css'; // Import the corresponding CSS file

const BlogCarousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="blog-carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
          >
            {/* Your slide content goes here */}
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
      <button className="carousel-btn carousel-btn--prev" onClick={handlePrevSlide}>
        &lt;
      </button>
      <button className="carousel-btn carousel-btn--next" onClick={handleNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default BlogCarousel;
