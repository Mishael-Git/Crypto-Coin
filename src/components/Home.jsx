import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BitcoinAnimation from "./Test";
import { pic1 } from "../assets/image/image";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="  md:flex md:flex-row sm:flex-col justify-between items-center px-[10%]  py-[10%] ">
<div className="space-y-5">
      <div>
      <h1 className="text-3xl font-bold text-white">Secure way to buy &</h1>
        <h1 className="text-3xl font-bold text-white">sell crypto</h1>
      </div>
      <div>
      <p class="text-white">secured crypto investing</p>
       <p class="text-white">from your phone</p>
      </div>

      <div className="md:w-[40%] sm:w-[40%]  ">
        <button className="px-3 bg-orange-500 duration-300  ease-in rounded-lg hover:text-white">Get started</button>
      </div>
     </div>
     <div>
      <img src={pic1} alt="" />
     </div>
    </div>
  );
}

export default Home;
