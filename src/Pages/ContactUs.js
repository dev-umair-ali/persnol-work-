import React from "react";
import "../Styles/Contactus.css";
import { useState } from "react";
import map from "../assets/Images/map.aimnode.png";
import Started from "../assets/Images/p.png";
import getoff from "../assets/Images/get-off-btn-removebg-preview.png";
import letsStart from "../assets/Images/Button-start-now-removebg-preview.png";
import register from "../assets/Images/Button-register-removebg-preview.png";
import Footer from "../Components/Footer";

function ContactUs() {
  return (
    <div className="contact-us-main">
      <div className="contact-us-top-text">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.{" "}
        </p>
      </div>
      {/* ===============GET YOUR QUOTE===================== */}
      <div className="get-quote-main">
        <div className="get-quote-text">
          <h1>GET YOUR QUOTE</h1>
          <h3>
            If You Are Interested In Talking To Us About A Project, Pleas Send
            Us A Message
          </h3>
          <p>
            While the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees. orem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut.{" "}
          </p>
        </div>
        <div className="get-quote-form">
          <MyForm />
        </div>
      </div>
      {/* AIMNODE STATIONS */}
      <div className="aimnode-stations-main">
        <div className="aimnode-stations-text">
          <h1>AIMNODE STATIONS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.{" "}
          </p>
        </div>
        <div className="aimnode-stations-img">
          <img src={map} alt="" />
        </div>
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

export default ContactUs;

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "pakistan",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="myForm" onSubmit={handleSubmit}>
      <div className="inputContainer1">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="myInput"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="myInput"
          placeholder="Your Email"
        />
      </div>

      <div className="inputContainer2">
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="myInput"
          placeholder="Your Country"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="myInput"
          placeholder="Phone"
        />
      </div>

      <div className="inputContainer">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="myInput"
          placeholder="Message"
        ></textarea>
      </div>

      <button type="submit" className="myButton">
        Submit
      </button>
    </form>
  );
};
