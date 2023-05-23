import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Sign_up from "./components/Sign_up";
import Market from "./components/Market";
import Blog from "./components/Blog";
import Login from "./components/LogIn";

function App() {
  return (
    <div className="  bg-gradient-to-r from-blue-500 to-blue-400 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/market" element={<Market />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign in" element={<Login/>} />
        <Route path="/sign up" element={<Sign_up />} />
      </Routes>
    </div>
  );
}

export default App;
