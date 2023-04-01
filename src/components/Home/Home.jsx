import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "../SingleCard/SingleCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    // <div className="section">
    //   <div className="blog">
    //     <img src="https://picsum.photos/id/1/845/450" alt="" />
    //     <div className="blog-text">
    //       <div className="blog-details">
    //         <div className="blog-writer">
    //           <div>
    //             <img src="https://picsum.photos/id/1/80" alt="" />
    //           </div>
    //           <div>
    //             <h4>Mr Raju</h4>
    //             <p>Mar 14 (4 Days ago)</p>
    //           </div>
    //         </div>
    //         <h1>
    //           How to get your first job as a self- <br /> taught programmer
    //         </h1>
    //         <p>#beginners #programming</p>
    //         <button>Mark as read</button>
    //       </div>
    //       <div>
    //         <button>
    //           <span>05 min read</span>
    //           <FontAwesomeIcon icon={faBookmark} />
    //         </button>
    //       </div>
    //     </div>
    //     <hr />
    //   </div>
    //   <div className="sidebar">
    //     <div className="spent-time">
    //       <h2>Spent time on read: </h2>
    //     </div>
    //     <div className="bookmark">
    //       <h2>Bookmarked Blogs: </h2>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="blog-container">
        {blogs.map((blog) => (
          <SingleCard blog={blog}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
