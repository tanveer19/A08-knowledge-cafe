import React from "react";
import { FaBookmark } from "react-icons/fa6";

const SingleCard = ({ blog, handleReadTime }) => {
  //   console.log(blog);
  return (
    <div className="blog-card card">
      <img className="mb-3" src={blog.img} alt="" />
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column align-items-start">
          <img src={blog.authorImage} alt="" />
          <h4> Mr. {blog.authorName}</h4>
          <h2 className="m-0">{blog.blogTitle}</h2>
          <p>#beginners #programming</p>
          <button
            onClick={() => handleReadTime(blog.readTime)}
            className="mark-as-read btn"
          >
            Mark as read
          </button>
        </div>
        {/* read btn */}
        <div className="">
          <button>
            {blog.readTime} Min read
            <span>
              <FaBookmark style={{}} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
