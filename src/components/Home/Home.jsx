import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "../SingleCard/SingleCard";
import { addToLS, getStoredBookmarks } from "../../utilities/localstorage";
import Bookmark from "../Bookmark/Bookmark";
import SideCart from "../SideCart/SideCart";

const Home = ({}) => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // load bookmarks from ls
  useEffect(() => {
    if (blogs.length) {
      const storedBookmarks = getStoredBookmarks();
      // console.log(storedBookmarks, blogs);

      const savedBookmarks = [];

      for (const id of storedBookmarks) {
        // console.log(id);
        const blog = blogs.find((blog) => blog.id === id);
        if (blog) {
          savedBookmarks.push(blog);
        }
      }
      // console.log("saved bookmark", savedBookmarks);
      setBookmarks(savedBookmarks);
    }
  }, [blogs]);

  const handleAddToBookmarks = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
    addToLS(blog.id);
  };

  // readtime
  const [readTime, setReadTime] = useState("");
  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };

  return (
    <div className="row">
      {/* blog section */}
      <div className="col-md-8">
        {blogs.map((blog) => (
          <SingleCard
            key={blog.id}
            handleReadTime={handleReadTime}
            handleAddToBookmarks={handleAddToBookmarks}
            blog={blog}
          ></SingleCard>
        ))}
      </div>
      {/* side panel */}
      <div className="col-md-4">
        <SideCart readTime={readTime}></SideCart>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
    </div>
  );
};

export default Home;
