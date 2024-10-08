import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ReadTime = ({ readTime }) => {
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    const getReadTime = localStorage.getItem("readTime");
    setTime(getReadTime);
  }, [readTime]);

  const handleComplete = () => {
    toast("Toasted!!!");
  };
  return (
    <div className="bg-primary-subtle p-2 text-center mb-3 rounded sticky-top">
      <p>Spent time on read: {time} min </p>
      {/* <button onClick={handleComplete} className="btn btn-info">
        Toast me
      </button> */}
    </div>
  );
};

export default ReadTime;
