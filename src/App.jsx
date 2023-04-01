import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./components/Blog/Blog";

function App() {
  const [readTime, setReadTime] = useState("");
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
    <div>
      <div className="header m-auto mb-3">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container col-md-8">
          <Home handleReadTime={handleReadTime}></Home>
          <Blog></Blog>
        </div>
        <div className="sideCart col-md-4 col-sm-12 card">
          <SideCart readTime={readTime}></SideCart>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
