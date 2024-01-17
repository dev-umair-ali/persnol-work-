import React from "react";
import "../Styles/AboutUs.css";
import astro from "../assets/Images/astro-about-us.png";
import popup from "../assets/Images/pop-up.png";
import Rocket from "../assets/Images/ROCKET 3D RENDER.png";
import Carousel from "../Components/Carousel";

function About() {
  return (
    <div className="about-us-main">
      <div className="about-us-main-text">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.{" "}
        </p>
      </div>
      {/* -----------Empowering Brands------------- */}
      <div className="Empowering-main">
        <div className="Empowering-text">
          <h1>Empowering Brands</h1>
          <h3>Transforming Digital Landscapes.</h3>
          <p>
            At AimNode Technologies, we are more than just a digital marketing
            startup. We are your partners in crafting an exceptional online
            journey for your brand. Our comprehensive suite of services is
            designed to catapult your business into the digital spotlight,
            ensuring that you not only standout but thrive in the competitive
            online landscape. With a dedicated team of experts, we are here to
            elevate your brand's identity, boost your online visibility, and
            drive meaningful engagement.
          </p>
          <img src={astro} alt="" />
        </div>
      </div>

      {/* ==========OUR JOURNEY ===============*/}
      <div className="our-journey-main">
        <div className="our-journey-tex">
          <h1>OUR JOURNEY</h1>
          <p style={{ padding: "0px 0px 20px 0px" }}>
            Founded in 2021 by three passionate individuals - Shayan, Shahzaib,
            and Awais, AimNode Technologies Name emerged as a beacon of
            innovation and excellence in the dynamic world of digital marketing
            and software development. With a shared vision and diverse
            expertise, we set out to revolutionize the way businesses harness
            the power of the digital landscape.
          </p>
          <div className="for-b-about"></div>
          <p style={{ padding: "20px 0px" }}>
            Shayan, Shahzaib, and Awais came together fueled by a common goal:
            to create a dynamic and innovative platform that seamlessly bridges
            the gap between cutting-edge technology and businesses, ensuring
            unprecedented growth and success in the digital age.
          </p>
        </div>
        <div className="our-journey-img">
          <img src={popup} alt="" />
        </div>
      </div>
      {/* ==============why-chose-us-main============= */}
      <div className="why-chose-us-main">
        <div className="why-us-text">
          <h1>WHY YOU CHOOSE US</h1>
          <h3 style={{ color: "white", fontSize: "25px" }}>
            Let's Elevate Your Digital Presence Together
          </h3>
          <p
            style={{
              fontSize: "16px",
              padding: "10px 0px",
              color: "white",
              letterSpacing: "1px",
            }}
          >
            Ready to take your brand to new heights in the digital realm?
            Partner with [AimNode Technologies Name] and experience the power of
            strategic digital marketing. Contact us today for a consultation and
            let’s embark on a journey towards online success.
          </p>
          <div className="why-chose-border"></div>
          <br />
          <p
            style={{
              fontSize: "16px",
              padding: "10px 0px",
              color: "white",
              letterSpacing: "1px",
            }}
          >
            Remember, it’s not just about services; it’s about creating
            meaningful connections and fostering brand growth. At [AimNode
            Technologies Name], we don’t just provide solutions – we create
            experiences that make a difference.
          </p>
        </div>
        <div className="why-us-img">
          <img src={Rocket} alt="" className="rocket-img" />
        </div>
        <div className="why-us-right-cards">
          <Carousel />
          <div
            className="for-border"
            style={{
              borderBottom: "5px solid #00e5ff",
              boxShadow: " 0 0 20px rgba(0, 229, 255, 0.7)",
              marginTop: "-20px",
            }}
          ></div>
        </div>
      </div>

      {/* ===========Our Team============ */}
      <div className="Our-Team-main">
        <div className="Our-Team-text">
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.{" "}
          </p>
          <div className="Our-Team-carousel"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
