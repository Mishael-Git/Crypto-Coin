import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { pic1 } from "../assets/image/image";

function MainPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="  md:flex md:flex-row sm:flex-col justify-between items-center px-[10%]  py-[4%] ">
<div className="space-y-5">
      <div className="">
      <h1 className="text-6xl font-bold text-white">Secure way to Buy & </h1>
        <h1 className="text-6xl font-bold text-white">Sell Crypto</h1>
      </div>
      <div>
      <p class="text-white text-3xl">secured crypto investing</p>
       <p class="text-white text-3xl">from your phone</p>
      </div>

      <div className="md:w-[40%] sm:w-[40%]  ">
        <button className="px-3 py-2 bg-orange-500 duration-300  ease-in rounded-lg hover:text-white">Get started</button>
      </div>
     </div>
     <div className="w-[50%] h-[50%]">
      <img src={pic1} alt="" className="w-full h-full" />
     </div>
    </div>
  );
}

export default MainPage;
