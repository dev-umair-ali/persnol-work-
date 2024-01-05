import React, { useState } from "react";
import "../../src/Styles/WorkFlow.css";
import WorkFlowCarousel from "./VerticalTabs";
import flow1 from "../assets/Images/work-flow1.png";
import flow2 from "../assets/Images/work-flow2.png";
import VerticalTabs from "./VerticalTabs";
// import VerticalTabs2 from "./VerticalTabs2"; // Import VerticalTabs2
import  VerticalDesignsTabs from "../Components/VerticalDesignsTabs"

const WorkFlow = () => {
  const [showVerticalTabs, setShowVerticalTabs] = useState(null); // Use null for initial state

  const handleTabClick = (tabName) => {
    setShowVerticalTabs(tabName); // Set the appropriate component name
  };

  return (
    <div className="workflow">
      <div className="workflow-header">
        <ul>
          <li onClick={() => handleTabClick("VerticalTabs")}>Ui-Ux</li>
          <li>Application</li>
          <li onClick={() => handleTabClick(" VerticalDesignsTabs")}>Designs</li>
          <li>Branding</li>
        </ul>
      </div>
      <div className="workflow-main">
        <div className="left-verticall"></div>
        <div className="work-flow-center">
          {showVerticalTabs === "VerticalTabs" && <VerticalTabs />}
          {showVerticalTabs === " VerticalDesignsTabs" && < VerticalDesignsTabs />}
          <div className="work-flow-all-content"></div>
        </div>
        <div className="right-verticall"></div>
      </div>
    </div>
  );
};

export default WorkFlow;
