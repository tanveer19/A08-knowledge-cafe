import React, { useEffect, useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "../SingleCard/SingleCard";

const Home = ({ handleReadTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="blog-container">
        {blogs.map((blog) => (
          <SingleCard
            key={blog.id}
            handleReadTime={handleReadTime}
            blog={blog}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
