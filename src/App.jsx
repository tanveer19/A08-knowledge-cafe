import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div>
      <div className="header m-auto mb-3">
        <Header></Header>
      </div>
      <div className="main row">
        <div className="home-container">
          <Home></Home>
          <Blog></Blog>
        </div>
        <div className="">
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
