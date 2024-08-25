import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SideCart = ({ readTime }) => {
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
  }, [readTime]);

  const handleComplete = () => {
    toast("Toasted!!!");
  };
  return (
    <div>
      <p>Spent time on read:{time} </p>
      {/* <button onClick={handleComplete} className="btn btn-info">
        Toast me
      </button> */}
    </div>
  );
};

export default SideCart;
