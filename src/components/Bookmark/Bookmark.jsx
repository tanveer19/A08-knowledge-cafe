import React from "react";

const Bookmark = ({ bookmarks }) => {
  // console.log(bookmarks);
  return (
    <div className="bg-secondary-subtle rounded p-3">
      <h5>Bookmarked Blogs:{bookmarks.length}</h5>
      <div className="">
        {bookmarks.map((bookmark, idx) => (
          <div key={idx}>
            <h6 className="bg-light p-2">{bookmark.blogTitle}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
