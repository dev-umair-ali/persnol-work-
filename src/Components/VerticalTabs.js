import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { MdExpandLess } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import tab1 from "../assets/Images/tab1.jpg";
import tab2 from "../assets/Images/tab-screen.png";
import imh1 from "../assets/Images/Kodiaxe.png";
import design1 from "../assets/Images/DESIGN 1.png";
import design2 from "../assets/Images/DESIGN 2.jpg";
import design3 from "../assets/Images/DESIGN 3.png";
import design4 from "../assets/Images/DESIGN 4.png";
import design5 from "../assets/Images/DESIGN 5.jpg";

import "../Styles/VerticalTabs.css";

const tabsData = [
  {
    titles: ["kodiaxe1 ", "throwing co"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    label: "Item 1",
    labelImage: design1,
    contentImage: imh1,
  },
  {
    titles: ["kodiaxe2 ", "throwing co"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    label: "Item 1",
    labelImage: design2,
    contentImage: imh1,
  },
  {
    titles: ["kodiaxe3 ", "throwing co"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    label: "Item 1",
    labelImage: design3,
    contentImage: imh1,
  },
  {
    titles: ["kodiaxe4 ", "throwing co"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    label: "Item 1",
    labelImage: design4,
    contentImage: imh1,
  },
  {
    titles: ["kodiaxe5 ", "throwing co"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    label: "Item 1",
    labelImage: design5,
    contentImage: imh1,
  },
  {
    titles: ["kodiaxe6 ", "throwing co"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    label: "Item 1",
    labelImage: design1,
    contentImage: imh1,
  },
  {
    titles: ["kodiaxe7 ", "throwing co"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    label: "Item 1",
    labelImage: design1,
    contentImage: imh1,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const currentTab = tabsData[value];

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              paddingTop: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {currentTab.titles.map((title, i) => (
              <Typography
                key={i}
                variant="h1"
                style={{
                  padding: "20px 0px",
                  marginTop: "5px",
                  fontSize: i === 0 ? "80px" : "40px",
                  color: i === 0 ? "white" : "white ",
                  fontWeight: i === 0 ? "600" : "400",
                  fontFamily: "Deutschlander",
                  letterSpacing: "2px",
                  lineHeight: "85px",
                  textTransform: "uppercase",
                  marginRight: i === 1 ? "20px" : "20px",
                  marginTop: i === 1 ? "20px" : "10px", // Bottom margin
                }}
              >
                {title}
              </Typography>
            ))}
          </div>
          <div
            className="for-verticall-div-border"
            style={{
              width: "50%",
              border: "1px solid #42BED5",
              margin: "20px 0px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              marginTop: "0px",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <img
              src={currentTab.contentImage}
              alt={`Content for Item ${index + 1}`}
              style={{ width: "50%", height: "auto" }}
            />
            <div style={{ marginLeft: "16px" }}>
              <Typography variant="body1">{currentTab.description}</Typography>
            </div>
          </div>
        </Box>
      )}
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
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            src={labelImage}
            alt={label}
            style={{ width: "300px", height: "200px", objectFit: "cover  " }}
          />
        </div>
      }
      {...props}
    />
  );
}

function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setValue((prevValue) => (prevValue + 1) % tabsData.length);
  };

  const handlePrev = () => {
    setValue(
      (prevValue) => (prevValue - 1 + tabsData.length) % tabsData.length
    );
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
      <div className="arrow-main-work">
        <IconButton onClick={handlePrev}>
          <MdExpandLess />
        </IconButton>
      </div>

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
          <CustomTab
            key={index}
            label={tab.label}
            labelImage={tab.labelImage}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      <div className="arrow-main-work1">
        <IconButton onClick={handleNext}>
          <IoIosArrowDown />
        </IconButton>
      </div>

      <div
        className="main-content-tabs"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {tabsData.map((tab, index) => (
          <TabPanel key={index} value={value} index={index} />
        ))}
      </div>
    </Box>
  );
}

export default VerticalTabs;
