import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { addToLS, getStoredBookmarks } from "../../utilities/localstorage";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";
import ReadTime from "../ReadTime/ReadTime";

const Blogs = ({}) => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

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
          <Blog
            key={blog.id}
            handleReadTime={handleReadTime}
            handleAddToBookmarks={handleAddToBookmarks}
            blog={blog}
          ></Blog>
        ))}
      </div>
      {/* side panel */}
      <div className="col-md-4">
        <ReadTime readTime={readTime}></ReadTime>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
    </div>
  );
};

export default Blogs;
