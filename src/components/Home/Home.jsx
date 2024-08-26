import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "../SingleCard/SingleCard";
import { addToLS, getStoredBookmarks } from "../../utilities/localstorage";
import Bookmark from "../Bookmark/Bookmark";

const Home = ({ handleReadTime }) => {
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

  return (
    <div>
      <Bookmark bookmarks={bookmarks}></Bookmark>
      <div className="blog-container">
        {blogs.map((blog) => (
          <SingleCard
            key={blog.id}
            handleReadTime={handleReadTime}
            handleAddToBookmarks={handleAddToBookmarks}
            blog={blog}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
