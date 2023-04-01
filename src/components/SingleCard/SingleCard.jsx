import React from "react";

const SingleCard = ({ blog }) => {
  console.log(blog);
  return (
    <div className="blog-card card ">
      <img src={blog.img} alt="" />
      <div className="d-flex">
        <div className="d-flex flex-column align-items-start">
          <img src={blog.authorImage} alt="" />
          <h4> Mr. {blog.authorName}</h4>
          <h2 className="m-0">{blog.blogTitle}</h2>
          <p>#beginners #programming</p>
          <button>Mark as read</button>
        </div>
        <div>
          <button>05 Min read</button>
        </div>
      </div>
    </div>
  );
};
{
  /* <img src={blog.img} alt="" />
<p>name: {blog.authorName}</p>
<p>name: {blog.blogTitle}</p> */
}
export default SingleCard;
