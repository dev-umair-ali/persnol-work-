import React, { useState } from "react";
import "../Styles/ServicesAccordion.css";
import ac1 from "../assets/Images/Application_.png";
import ac2 from "../assets/Images/Design11.png";
import ac3 from "../assets/Images/Branding_.png";
import ac4 from "../assets/Images/Application_.png";
import accordion1 from "../assets/Images/accorion1  (1).png";
import accordion2 from "../assets/Images/accorion2  (2).png";
import accordion3 from "../assets/Images/accorion3 (3).png";

const Accordion = ({
  title,
  title2,
  description,
  expand,
  onClick,
  content,
  backgroundImage,
}) => {
  return (
    <div
      className=""
      style={{
        border: "5px solid #2389b0",
        borderRadius: "10px",
        marginBottom: "40px",
      }}
    >
      <div className="for-hole-b">
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
          {content.length > 0 && (
            <div className="accordion-item">
              {/*========== <div className="custom-div-1"> ===============*/}
              <div className="custom-div-1">
                <div className="accordion-text">
                  <h1>{content[0].div1.text}</h1>
                  <h3>{title2}</h3>
                  <div className="accrodion-whiteline"></div>
                  <p>{description}</p>
                </div>
                <div className="accordion-imgs">
                  {" "}
                  <img src={content[0].div1.image} alt={`Image - Div 1`} />
                </div>
              </div>
              {/*========== <div className="custom-div-2"> ===============*/}

              <div className="custom-div-2">
                <div className="accordion-imgs">
                  <img src={content[0].div2.image} alt={`Image - Div 2`} />
                </div>
                <div className="accordion-text">
                  <h1>{content[0].div2.text}</h1>
                  <h3>{title2}</h3>
                  <div className="accrodion-whiteline"></div>
                  <p>{description}</p>
                </div>
              </div>
              {/*========== <div className="custom-div-3"> ===============*/}

              <div className="custom-div-3">
                <div className="accordion-text">
                  <h1>{content[0].div3.text}</h1>
                  <h3>{title2}</h3>
                  <div className="accrodion-whiteline"></div>
                  <p>{description}</p>
                </div>
                <div className="accordion-imgs">
                  <img src={content[0].div3.image} alt={`Image - Div 3`} />
                </div>
              </div>
            </div>
          )}
        </dd>
      </div>
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
      title: "Application",
      title2: "Empowering Your Business with Dynamic Web designs",
      description:
        "Explore our latest blog post to stay up-to-date with the ever-evolving landscape of our industry. Our team of experts has distilled their knowledge into this concise and informative read, ensuring you're well-prepared to navigate the challenges and opportunities ahead. Don't miss out – click the link and delve into the insights that matter most for your success.",
      content: [
        {
          div1: {
            image: accordion1,
            text: "Web design",
          },
          div2: {
            image: accordion2,
            text: "Website development",
          },
          div3: {
            image: accordion3,
            text: "Speed Optimization",
          },
        },
      ],
      backgroundImage: ac1,
    },
    {
      title: "Design",
      title2: "Empowering Your Business with Dynamic Website Developments",
      description:
        "The process of creating and managing websites is referred to as website development, or just web development. It includes a variety of activities, including creating the site’s user interface and layout as well as coding and programming its functioning. Front-end and back-end development are the two primary subsets of web development.",
      content: [
        {
          div1: {
            image: accordion1,
            text: "Speed Optimization",
          },
          div2: {
            image: accordion2,
            text: "Content 2 for Second Accordion - Div 2",
          },
          div3: {
            image: accordion3,
            text: "Speed Optimization",
          },
        },
      ],
      backgroundImage: ac2,
    },
    {
      title: "Branding",
      title2: "Additional Title for Third Accordion",
      description: "Additional Description for Third Accordion",
      content: [
        {
          div1: {
            image: accordion1,
            text: "Speed Optimization",
          },
          div2: {
            image: accordion1,
            text: "Speed Optimization",
          },
          div3: {
            image: accordion1,
            text: "Speed Optimization",
          },
        },
      ],
      backgroundImage: ac3,
    },
    // ... (other accordion items)
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
            title2={item.title2} // Add this line
            description={item.description} // Add this line
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
