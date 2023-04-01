import React from "react";

const SingleCard = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <p>name: {blog.authorName}</p>
      <p>name: {blog.blogTitle}</p>
      <img src={blog.img} alt="" />
    </div>
  );
};

export default SingleCard;
