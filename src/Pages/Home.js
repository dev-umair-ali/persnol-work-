import React from "react";
import "../Styles/Home.css";
import aboutAstro from "../assets/Images/astro-about-us.png";
import SwiperSlider from "../Components/CircleSlider";
import CircleAnimation from "../Components/CircleSlider";
import circleastro from "../assets/Images/circle-astro.png";
import Footer from "../Components/Footer";
import Started from "../assets/Images/p.png";
import getoff from "../assets/Images/get-off-btn-removebg-preview.png";
import letsStart from "../assets/Images/Button-start-now-removebg-preview.png";
import register from "../assets/Images/Button-register-removebg-preview.png";
import Rocket from "../assets/Images/ROCKET 3D RENDER.png";
import Carousel from "../Components/Carousel";
import BlogCarousel from "../Components/WhyUSCarousel";
import SlickCarousel from "../Components/SlickCarousel";
import WhyUSCarousel from "../Components/WhyUSCarousel";

function Home() {
  return (
    <div className="home-main-page">
      {/*------------------ home-hero-section----------------*/}
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
      {/*------------------ home-hero-section-End---------------*/}

      {/* kodiaxe     throwing co */}

      <div className="tab-container"></div>


      {/* -------------------ABOUT US--------------------------*/}
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
      {/* -------------------ABOUT US-End-------------------------*/}

      {/* ----------------------------RECENT WORK -----------------------*/}
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
        <div className="home-recent-carousel">
          <WhyUSCarousel/>
        </div>
      </div>
      {/* ----------------------------RECENT WORK-End-----------------------*/}

      {/* -------------------------------Home-blog-main"------------- */}
      <div className="Home-blog-main">
        <div className="home-blog-text">
          <h1>BLOG</h1>
          <h3>Latest From The Blog</h3>
          <p>
            Explore our latest blog post to stay up-to-date with the
            ever-evolving landscape of our industry. Our team of experts has
            distilled their knowledge into this concise and informative read,
            ensuring you're well-prepared to navigate the challenges and
            opportunities ahead. Don't miss out – click the link and delve into
            the insights that matter most for your success.
          </p>
        </div>

        <div className="home-blog-Carousel">
          {/* < BlogCarousel/> */}
          <SlickCarousel />
        </div>
      </div>

      {/*------------------------------- Home-blog-main-End"----------- */}
      {/*--------------------------- WHY YOU CHOOSE US---------------------------- */}
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
          <div
            style={{
              borderBottom: "2px solid #00e5ff",
              width: "60%",
            }}
          ></div>
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
          <img src={Rocket} alt="" />
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
      {/*--------------------------- WHY YOU CHOOSE US-End--------------------------- */}

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
            <img src={Started} alt="" />
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
      {/*----------------------- Lets Get Started Your Project-End----------------*/}

      <Footer />
    </div>
  );
}

export default Home;
