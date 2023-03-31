import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="section">
      <div className="blog">
        <img src="https://picsum.photos/id/1/845/450" alt="" />
        <div className="blog-text">
          <div className="blog-details">
            <div className="blog-writer">
              <div>
                <img src="https://picsum.photos/id/1/80" alt="" />
              </div>
              <div>
                <h4>Mr Raju</h4>
                <p>Mar 14 (4 Days ago)</p>
              </div>
            </div>
            <h1>
              How to get your first job as a self- <br /> taught programmer
            </h1>
            <p>#beginners #programming</p>
            <p>Mark as read</p>
          </div>
          <div>
            <p>05 min read </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="sidebar">
        <div className="spent-time">
          <h2>Spent time on read: </h2>
        </div>
        <div className="bookmark">
          <h2>Bookmarked Blogs: </h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
