// bookmark manager
const getStoredBookmarks = () => {
  const storedBookmarks = localStorage.getItem("bookmarks");
  if (storedBookmarks) {
    return JSON.parse(storedBookmarks);
  }
  return [];
};

const saveBookmarksToLS = (bookmarks) => {
  const bookmarksStringified = JSON.stringify(bookmarks);
  localStorage.setItem("bookmarks", bookmarksStringified);
};

const addToLS = (id) => {
  const bookmarks = getStoredBookmarks();
  bookmarks.push(id);
  saveBookmarksToLS(bookmarks);
};

const removeFromLS = (id) => {
  const bookmarks = getStoredBookmarks();
  const remaining = bookmarks.filter((idx) => idx !== id);
  saveBookmarksToLS(remaining);
};

export { addToLS, getStoredBookmarks, removeFromLS };
