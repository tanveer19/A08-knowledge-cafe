import React, { useEffect, useState } from "react";

const SideCart = ({ readTime }) => {
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
  }, [readTime]);

  return (
    <div>
      <p>Spent time on read:{time} </p>
    </div>
  );
};

export default SideCart;
