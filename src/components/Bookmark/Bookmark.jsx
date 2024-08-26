import React from "react";

const Bookmark = ({ bookmarks }) => {
  console.log(bookmarks);
  return (
    <div className="">
      {bookmarks.length}
      <div className="bookmark-container">
        {bookmarks.map((bookmark) => (
          <div key={bookmark.id}>
            <h4>{bookmark.blogTitle}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
