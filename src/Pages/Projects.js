import React from "react";
import "../Styles/Projects.css";
import Application from "../Components/ProjectAccordion";
import getoff from "../assets/Images/get-off-btn-removebg-preview.png";
import letsStart from "../assets/Images/Button-start-now-removebg-preview.png";
import register from "../assets/Images/Button-register-removebg-preview.png";
import "../Styles/Home.css";
import Footer from "../Components/Footer";

function Projects() {
  return (
    <div className="projects-main">
      <div className="projects-top-text">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.{" "}
        </p>
      </div>
      {/* ===============project-hero-sec==================== */}
      <div className="project-hero-sec">
        <div className="project-hero-text">
          <h1>
            {" "}
            We pledge ourselves to <br /> outstanding project
          </h1>
          <div className="hero-project-b"></div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
          </p>
        </div>
        <div className="project-hero-img">
          <img
            src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706179850/project1_ads3jr.png"
            alt=""
          />
        </div>
      </div>
      <div className="Projects-Acco">
        <Application />
      </div>
      {/*----------------------- Lets Get Started Your Project ----------------*/}
      <div className="home-started-new">
        <div className="home-started-text">
          <h3>ARE YOU READY FOR</h3>
          <h1>Lets Get Started Your Project</h1>
        </div>
        <div className="home-started-img-main">
          <div className="home-btn1">
            <button>
              <img src={getoff} alt="Button 1" />
            </button>
          </div>
          <div></div>

          <div className="home-started-img">
            <img
              src="https://res.cloudinary.com/dabxnoxsx/image/upload/v1706113475/p_g3rjaw.png"
              alt=""
            />
          </div>

          <div className="home-btn-2">
            <button>
              <img src={register} alt="Button 2" />
            </button>
          </div>
          <div className="home-btn-3">
            <button>
              <img src={letsStart} alt="Button 3" />
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Projects;
