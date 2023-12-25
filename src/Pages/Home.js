import React from "react";
import "../Styles/Home.css";
import aboutAstro from "../assets/Images/astro-about-us.png";
import SwiperSlider from "../Components/CircleSlider";
import CircleAnimation from "../Components/CircleSlider";
import circleastro from "../assets/Images/circle-astro.png";
import Footer from "../Components/Footer";
// import My3DComponent from "../Components/SplineAnimation";

function Home() {
  return (
    <div className="home-main-page">
      <div className="home-hero-sec">
        <div className="home-hero-sec-text">
          <h1>
            WELCOME TO
            <br /> AIMNODE TECHNOLOGIES
          </h1>
          <p>
            At AimNode Technologies, we are more than just a digital marketing
            startup. We are your partners in crafting an exceptional online
            journey for your brand.
          </p>
        </div>
        <div className="home-hero-sec-img">
          <CircleAnimation />

          <img src={circleastro} alt="" />
        </div>
      </div>

      {/* kodiaxe     throwing co */}

      <div className="tab-container"></div>

      {/* ABOUT US */}
      <div className="Home-about-us-main">
        <div className="home-about-text">
          <h1>ABOUT US</h1>
          <h3>Empowering Brands, Transforming Digital Landscapes.</h3>
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
        </div>
        <div className="home-about-img">
          <img src={aboutAstro} alt="" />
        </div>
     
      </div>
      {/* RECENT WORK */}
      <div className="renent-work-main">
        <div className="renent-work-text">
          <h1>RECENT WORK</h1>
          <h3>Our Recent Activities</h3>
          <p>
            Far far away, behind the word mountains, far from
            <br /> the countries Vokalia and Consonantia, there live the blind
            texts.
          </p>
        </div>
      </div>
      {/* <My3DComponent /> */}
      <Footer />
    </div>
  );
}

export default Home;
