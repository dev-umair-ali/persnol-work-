import React, { useState } from "react";
import "../Styles/ProjectAccordion.css";
import { FaCheck } from "react-icons/fa6";

const Accordion = ({ title, expand, onClick, content, backgroundImg }) => (
  <div
    style={{
      border: "5px solid #2389b0",
      borderRadius: "10px",
      marginBottom: "40px",
    }}
  >
    <dt
      className={expand ? "title is-expanded" : "title"}
      style={{ backgroundImage: `url(${backgroundImg})` }}
      onClick={onClick}
    >
      {title}
    </dt>
    <dd
      className={expand ? "content is-expanded" : "content"}
      onClick={onClick}
    >
      <div className="project-accordion-main-inner">
        {content.image && (
          <div className="for-project-img">
            <img src={content.image} alt="" />
          </div>
        )}
        {content.priceBasic && (
          <div className="accordion-project-pricing">
            <div className="price-basic">
              <div className="for-main-price">
                <h1>Basic</h1>
                <h2>{content.priceBasic.price}</h2>
              </div>
              <ul>
                {content.priceBasic.features.map((feature) => (
                  <li key={feature}>
                    <FaCheck /> {feature}
                  </li>
                ))}
              </ul>
              <button className="active-now-button">Active Now</button>
            </div>
            {/* ... similar structure for pricePremium and priceStandard */}
            {content.pricePremium && (
              <div className="price-premium">
                <div className="for-main-price">
                  <h1>Premium</h1>
                  <h2>{content.pricePremium.price}</h2>
                </div>
                <ul>
                  {content.pricePremium.features.map((feature) => (
                    <li key={feature}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                </ul>
                <button className="">Active Now</button>
              </div>
            )}
            {content.priceStandard && (
              <div className="price-standard ">
                <div className="for-main-price">
                  <h1>Standard</h1>
                  <h2>{content.priceStandard.price}</h2>
                </div>
                <ul>
                  {content.priceStandard.features.map((feature) => (
                    <li key={feature}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                </ul>
                <button className="">Active Now</button>
              </div>
            )}
          </div>
        )}
      </div>
    </dd>
  </div>
);

const Application = () => {
  const [blocks, setBlocks] = useState({
    block1: true,
    block2: false,
    block3: false,
  });

  const toggle = (index) => () => {
    setBlocks((prevBlocks) => ({
      ...prevBlocks,
      [`block${index}`]: !prevBlocks[`block${index}`],
    }));
  };

  const toggleExpand =
    (expand = false) =>
    () => {
      setBlocks({
        block1: expand,
        block2: expand,
        block3: expand,
      });
    };

  const accordionList = [
    {
      title: "First Accordion",
      backgroundImg:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706192035/Ui-Ux_if55tv.png",
      image:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706184053/Collage_m27bak.png",
      priceBasic: {
        price: 49,
        features: [
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 1",
          "Feature 2",
          "Feature 3",
        ],
      },
      pricePremium: {
        price: 49,
        features: [
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 1",
          "Feature 2",
          "Feature 3",
        ],
      },
      priceStandard: {
        price: 49,
        features: [
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 1",
          "Feature 2",
          "Feature 3",
        ],
      },
    },
    {
      title: "Second Accordion",
      backgroundImg:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706192035/logo_qmcgzz.png",
    },
    {
      title: "Third Accordion",
      backgroundImg:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706192035/Flyer_gulhq5.png",
      // ... data for the third accordion
    },
  ];

  return (
    <div className="container">
      <div className="accordion-btn">
        <button type="button" className="btn" onClick={toggleExpand(true)}>
          Expand All
        </button>
        <button type="button" className="btn" onClick={toggleExpand()}>
          Collapse All
        </button>
      </div>
      <dl className="accordion">
        {accordionList.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            expand={blocks[`block${index + 1}`]}
            onClick={toggle(index + 1)}
            content={item}
            backgroundImg={item.backgroundImg}
          />
        ))}
      </dl>
    </div>
  );
};
export default Application;
