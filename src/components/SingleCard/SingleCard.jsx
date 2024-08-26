import { FaBookmark } from "react-icons/fa6";

const SingleCard = ({ blog, handleReadTime, handleAddToBookmarks }) => {
  //   console.log(blog);
  return (
    <div className="blog-card card">
      <img className="mb-3" src={blog.img} alt="" />
      <div className="d-flex justify-content-between">
        {/* author, title, btn*/}

        <div className="d-flex flex-column align-items-start col-9">
          <img src={blog.authorImage} alt="" />
          <h4> Mr. {blog.authorName}</h4>
          <h2 className="">{blog.blogTitle}</h2>
          <p>#beginners #programming</p>
          <button
            onClick={() => handleReadTime(blog.readTime)}
            className="mark-as-read"
          >
            Mark as read
          </button>
        </div>
        {/* bookmark btn */}
        <div className="d-flex align-items-start col-3 ms-5">
          <div>{blog.readTime} Min read</div>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="bookmark-btn"
          >
            <FaBookmark style={{}} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
