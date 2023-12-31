import React from "react";

const SingleCard = ({ blog, handleReadTime }) => {
  //   console.log(blog);
  return (
    <div className="blog-card card ">
      <img className="mb-3" src={blog.img} alt="" />
      <div className="d-flex">
        <div className="d-flex flex-column align-items-start">
          <img src={blog.authorImage} alt="" />
          <h4> Mr. {blog.authorName}</h4>
          <h2 className="m-0">{blog.blogTitle}</h2>
          <p>#beginners #programming</p>
          <button className="btn">Mark as read</button>
        </div>
        <div>
          <button onClick={() => handleReadTime(blog.readTime)}>
            {blog.readTime} Min read
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
