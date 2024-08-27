import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleReadTime, handleAddToBookmarks }) => {
  // console.log(blog);
  const { img, authorImage, authorName, blogTitle, readTime, hashtags } = blog;
  return (
    <div className="blog-card card">
      <img className="mb-3 rounded" src={img} alt="" />
      <div className="d-flex justify-content-between ">
        {/* author, title, btn*/}

        <div className="d-flex flex-column align-items-start col-9">
          <img className="rounded-circle" src={authorImage} alt="" />
          <h4> Mr. {authorName}</h4>
          <h2 className="">{blogTitle}</h2>
          <p>
            {hashtags.map((hashtag, idx) => (
              <span key={idx}>
                <a href="">#{hashtag} </a>
              </span>
            ))}
          </p>
          <button
            onClick={() => handleReadTime(readTime)}
            className="mark-as-read"
          >
            Mark as read
          </button>
        </div>

        {/* bookmark btn */}

        <div className="d-flex col-3">
          <div className="">{readTime} Min read</div>
          <div className="">
            <button
              onClick={() => handleAddToBookmarks(blog)}
              className="border border-0 bg-white"
            >
              <FaRegBookmark style={{}} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
