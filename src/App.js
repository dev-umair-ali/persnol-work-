// import React, { lazy, Suspense } from "react";
// import Header from "./Components/Header";
// import "./index.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// const Home = lazy(() => import("./Pages/Home"));
// const About = lazy(() => import("./Pages/About"));
// const Blogs = lazy(() => import("./Pages/Blogs"));
// const ContactUs = lazy(() => import("./Pages/ContactUs"));
// const Projects = lazy(() => import("./Pages/Projects"));
// const Services = lazy(() => import("./Pages/Services"));
// const BlogContent = lazy(() => import("./Pages/BlogContent"));

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Header />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contactus" element={<ContactUs />} />
//             <Route path="/blogs" element={<Blogs />} />
//             <Route path="/blogs/:id" element={<BlogContent />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Header from "./Components/Header";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import BlogContent from "./Pages/BlogContent";
import SmoothScroll from "./Components/SmoothScroll";
function App() {
  const cardsData = [
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706266425/fotis-fotopoulos-DuHKoV44prg-unsplash_eehbyr.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      description:
        "This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.This is an example description for the first blog.",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706266209/maximalfocus-VT4rx775FT4-unsplash_2_t5hjud.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706266140/ales-nesetril-Im7lZjxeLhg-unsplash_rfnxca.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706271495/fotis-fotopoulos-LJ9KY8pIH3E-unsplash_tss2hk.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706271490/alex-knight-2EJCSULRwC8-unsplash_z3majy.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706271389/fotis-fotopoulos-LJ9KY8pIH3E-unsplash_nde7zm.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706271389/fotis-fotopoulos-LJ9KY8pIH3E-unsplash_nde7zm.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706271288/rohan-oraqZwfiQgE-unsplash_y8iqka.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706272182/ben-kolde-bs2Ba7t69mM-unsplash_kyy7wa.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706266209/maximalfocus-VT4rx775FT4-unsplash_2_t5hjud.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706266140/ales-nesetril-Im7lZjxeLhg-unsplash_rfnxca.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706271495/fotis-fotopoulos-LJ9KY8pIH3E-unsplash_tss2hk.jpg",
      category: "Category 1",
      heading: "Example Card Heading 1",
      date: "2024-01-26",
    },

    // Add more card data objects as needed
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SmoothScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs cardsData={cardsData} />} />
          {/* Pass cardsData to BlogContent component */}
          <Route
            path="/blogs/:id"
            element={<BlogContent cardsData={cardsData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
