import React from "react";
import "../Styles/BlogCard.css";
import "../Styles/Blog.css";
import Footer from "../Components/Footer";
function Blogs() {
  return (
    <div className="blogs-us-main">
      <div className="blogs-us-top-text">
        <h1>Blogs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.{" "}
        </p>
      </div>
      {/* blog cards */}
      <div className="blog-card-main">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;

const cardsData = [
  {
    imageUrl:
      "https://res.cloudinary.com/dabxnoxsx/image/upload/v1706266425/fotis-fotopoulos-DuHKoV44prg-unsplash_eehbyr.jpg",
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

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="card-grid">
        {cardsData.map((card, index) => (
          <a className="card" href="#" key={index}>
            <div
              className="card__background"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            ></div>
            <div className="card__content">
              <p className="card__category">{card.category}</p>
              <h3 className="card__heading">{card.heading}</h3>
              <p className="card__date">{card.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
