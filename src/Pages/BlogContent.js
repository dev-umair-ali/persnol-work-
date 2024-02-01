import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../Styles/BlogContent.css";

const BlogContent = ({ cardsData }) => {
  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const blog = cardsData[blogId];
  const navigate = useNavigate();

  if (!cardsData || !blog) {
    console.log("Blog not found");
    return <div>Blog not found</div>;
  }

  const totalBlogs = cardsData.length;

  const handleNext = () => {
    const nextBlogId = (blogId + 1) % totalBlogs;
    navigate(`/blogs/${nextBlogId}`);
  };

  const handlePrevious = () => {
    const previousBlogId = (blogId - 1 + totalBlogs) % totalBlogs;
    navigate(`/blogs/${previousBlogId}`);
  };

  return (
    <div className="blog-content-main">
      <div className="blog-content-wraper">
        <div className="blog-content-imageUrl">
          <img src={blog.imageUrl} alt={blog.heading} />
        </div>
        <div className="blur-bg-blog">
          <div className="blog-content-heading">
            <span>
              <p>Category: {blog.category}</p>
            </span>
            <h1>{blog.heading}</h1>
          </div>
          {/* <div className="blog-content-category"></div> */}
          <div className="blog-content-date">
            <p>Date: {blog.date}</p>
          </div>

          <div className="blog-content-description">
            <p>{blog.description}</p>
          </div>

          <div className="blog-content-buttons">
            {blogId > 0 && (
              <Link
                to={`/blogs/${blogId - 1}`}
                className="button"
                onClick={handlePrevious}
              >
                Previous
              </Link>
            )}
            {blogId < totalBlogs - 1 && (
              <Link
                to={`/blogs/${blogId + 1}`}
                className="button"
                onClick={handleNext}
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
