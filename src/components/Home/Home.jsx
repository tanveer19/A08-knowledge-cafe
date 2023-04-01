import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "../SingleCard/SingleCard";

const Home = ({ handleWatchTime }) => {
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
            handleWatchTime={handleWatchTime}
            blog={blog}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
