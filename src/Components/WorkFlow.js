import React, { useState } from "react";
import "../../src/Styles/WorkFlow.css";
import WorkFlowCarousel from "./VerticalTabs";
import flow1 from "../assets/Images/work-flow1.png";
import flow2 from "../assets/Images/work-flow2.png";
import VerticalTabs from "./VerticalTabs";
import VerticalDesignsTabs from "../Components/VerticalDesignsTabs";
import portlogo from "../assets/Images/port-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





const WorkFlow = () => {
  const [showVerticalTabs, setShowVerticalTabs] = useState("VerticalTabs"); // Set default active tab

  const handleTabClick = (tabName) => {
    setShowVerticalTabs(tabName);
  };

  return (
    <div className="workflow">
      <div className="workflow-header">
        <div className="port-logo">
          <img src={portlogo} alt="" />
        </div>
        <div>
          <ul>
            <li
              className={showVerticalTabs === "VerticalTabs" ? "active" : ""}
              onClick={() => handleTabClick("VerticalTabs")}
            >
              Ui-Ux
            </li>
            <li className={showVerticalTabs === "Application" ? "active" : ""}>
              Application
            </li>
            <li
              className={showVerticalTabs === "VerticalDesignsTabs" ? "active" : ""}
              onClick={() => handleTabClick("VerticalDesignsTabs")}
            >
              Designs
            </li>
            <li className={showVerticalTabs === "Branding" ? "active" : ""}>
              Branding
            </li>
          </ul>
        </div>
      </div>
      <div className="workflow-main">
        <div className="left-verticall">
          <FaFacebookF/>
          <FaInstagram/>
          <FaTwitter />
          <FaLinkedin/>
        </div>
        <div className="work-flow-center">
          {showVerticalTabs === "VerticalTabs" && <VerticalTabs />}
          {showVerticalTabs === "VerticalDesignsTabs" && (
            <VerticalTabs />
          )}
        </div>
        <div className="right-verticall"></div>
      </div>
    </div>
  );
};

export default WorkFlow;
