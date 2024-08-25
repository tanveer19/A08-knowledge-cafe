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
      console.log(storedBookmarks, blogs);

      const savedBookmarks = [];
      for (const id of storedBookmarks) {
        console.log(id);
        const bookmark = bookmarks.find((bookmark) => bookmark.id === id);
        if (bookmark) {
          savedBookmarks.push(bookmark);
        }
      }
      console.log("saved bookmark", savedBookmarks);
      setBookmarks(savedBookmarks);
    }
  }, [blogs]);

  const handleAddToBookmarks = (bookmark) => {
    const newBookmark = [...bookmarks, bookmark];
    setBookmarks(newBookmark);
    addToLS(bookmark.id);
  };

  return (
    <div>
      <Bookmark bookmark={bookmarks}></Bookmark>
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
