import React from "react";
import Body from "./components/Body";
import BitcoinAnimation from "./components/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Sign_up from "./components/Sign_up";
import Market from "./components/Market";
import Blog from "./components/Blog";
import Login from "./components/LogIn";

function App() {
  return (
    <div className="  bg-gradient-to-r from-purple-500 to-indigo-500  h-screen w-screen">
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
