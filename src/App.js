import React, { lazy, Suspense } from "react";
import Header from "./Components/Header";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Projects = lazy(() => import("./Pages/Projects"));
const Services = lazy(() => import("./Pages/Services"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
