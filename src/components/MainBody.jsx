import React, { useEffect } from "react";
import { pic1 } from "../assets/image/image";
import AOS from "aos";
import "aos/dist/aos.css";

function MainBody() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
        H
export default MainBody;
