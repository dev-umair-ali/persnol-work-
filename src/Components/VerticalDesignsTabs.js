// VerticalDesignsTabs.jsx

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { MdExpandLess } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import "../Styles/VerticalTabs.css";
import tab3 from "../assets/Images/tab-3.jpg";
const tabsData = [
  {
    label: "Design 1",
    content: "Content for Design 1",
    labelImage: tab3,
    contentImage: tab3 ,
  },
  {
    label: "Design 2",
    content: "Content for Design 2",
    labelImage:tab3,
    contentImage: tab3 ,
  },
  // ... other design items
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function CustomTab({ label, labelImage, ...props }) {
  return (
    <Tab
      label={
        <div>
          <img src={labelImage} alt={label} style={{ width: "124px", display: "flex" }} />
          {label}
        </div>
      }
      {...props}
    />
  );
}

function VerticalDesignsTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setValue((prevValue) => (prevValue + 1) % tabsData.length);
  };

  const handlePrev = () => {
    setValue((prevValue) => (prevValue - 1 + tabsData.length) % tabsData.length);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "transparent",
        display: "flex",
        height: "100%",
        position: "relative",
      }}
    >
      <IconButton onClick={handlePrev}>
        <div className="arrow-main-work">
          <MdExpandLess />
        </div>
      </IconButton>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: "30%",
          height: "100%",
          display: "flex",
        }}
      >
        {tabsData.map((tab, index) => (
          <CustomTab key={index} label={tab.label} labelImage={tab.labelImage} {...a11yProps(index)} />
        ))}
      </Tabs>
      <IconButton onClick={handleNext}>
        <div className="arrow-main-work1">
          <IoIosArrowDown />
        </div>
      </IconButton>
      <div className="main-content-tabs">
        {tabsData.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            <img
              src={tab.contentImage}
              alt={`Content for Design ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
            <Typography>{tab.content}</Typography>
          </TabPanel>
        ))}
      </div>
    </Box>
  );
}

export default VerticalDesignsTabs;
