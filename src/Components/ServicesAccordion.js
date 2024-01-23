import React, { useState } from "react";
import "../Styles/ServicesAccordion.css";
import ac1 from "../assets/Images/Application_.png";
import ac2 from "../assets/Images/Design11.png";
import ac3 from "../assets/Images/Branding_.png";
import ac4 from "../assets/Images/Application_.png";
import accordion1 from "../assets/Images/accorion1  (1).png";
import accordion2 from "../assets/Images/accorion2  (2).png";
import accordion3 from "../assets/Images/accorion3 (3).png";

const Accordion = ({ title, expand, onClick, content, backgroundImage }) => {
  return (
    <div>
      <dt
        className={expand ? "title is-expanded" : "title"}
        onClick={onClick}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {title}
      </dt>
      <dd
        className={expand ? "content is-expanded " : "content"}
        onClick={onClick}
      >
        {content.map((item, index) => (
          <div key={index} className="accordion-item">
            <img src={item.image} alt={`Image ${index}`} />
            <p>{item.text}</p>
          </div>
        ))}
      </dd>
    </div>
  );
};

const ServicesAccordion = () => {
  const [accordionState, setAccordionState] = useState({
    block1: true,
    block2: false,
    block3: false,
  });

  const toggle = (index) => () => {
    setAccordionState((prevState) => ({
      ...prevState,
      [`block${index}`]: !prevState[`block${index}`],
    }));
  };

  const toggleExpand =
    (expand = false) =>
    () => {
      setAccordionState({
        block1: expand,
        block2: expand,
        block3: expand,
      });
    };

  const accordionList = [
    {
      title: "First Accordion",
      content: [
        {
          image: accordion1,
          text: "Content 1 for First Accordion",
        },
        {
          image: accordion2,
          text: "Content 2 for First Accordion",
        },
        {
          image: accordion3,
          text: "Content 3 for First Accordion",
        },
      ],
      backgroundImage: ac1,
    },
    {
      title: "Second Accordion",
      content: [
        {
          image: "url_to_image2_1.jpg",
          text: "Content 1 for Second Accordion",
        },
        {
          image: "url_to_image2_2.jpg",
          text: "Content 2 for Second Accordion",
        },
        {
          image: "url_to_image2_3.jpg",
          text: "Content 3 for Second Accordion",
        },
      ],
      backgroundImage: ac2,
    },
    {
      title: "Third Accordion",
      content: [
        {
          image: "url_to_image3_1.jpg",
          text: "Content 1 for Third Accordion",
        },
        {
          image: "url_to_image3_2.jpg",
          text: "Content 2 for Third Accordion",
        },
        {
          image: "url_to_image3_3.jpg",
          text: "Content 3 for Third Accordion",
        },
      ],
      backgroundImage: ac3,
    },
    {
      title: "Third Accordion",
      content: [
        {
          image: "url_to_image3_1.jpg",
          text: "Content 1 for Third Accordion",
        },
        {
          image: "url_to_image3_2.jpg",
          text: "Content 2 for Third Accordion",
        },
        {
          image: "url_to_image3_3.jpg",
          text: "Content 3 for Third Accordion",
        },
      ],
      backgroundImage: ac4,
    },
  ];

  return (
    <div className="container">
      {/* <h1>React Accordion</h1>
      <button type="button" className="btn" onClick={toggleExpand(true)}>
        Expand All
      </button>
      <button type="button" className="btn" onClick={toggleExpand()}>
        Collapse All
      </button> */}
      <dl className="accordion">
        {accordionList.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            onClick={toggle(index + 1)}
            expand={accordionState[`block${index + 1}`]}
            content={item.content}
            backgroundImage={item.backgroundImage}
          />
        ))}
      </dl>
    </div>
  );
};

export default ServicesAccordion;
