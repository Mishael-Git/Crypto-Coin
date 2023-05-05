import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className=" md:px-36 sm:px-5  py-5 ">
<div className="space-y-5">
      <div>
      <h1 className="text-3xl font-bold text-white">Secure way to buy &</h1>
        <h1 className="text-3xl font-bold text-white">sell crypto</h1>
      </div>
      <div>
      <p class="text-white">secured crypto investing</p>
       <p class="text-white">from your phone</p>
      </div>

      <div className="md:w-[20%]   ">
        <button className="px-3 bg-orange-500 rounded-lg hover:text-white">Get started</button>
      </div>
     </div>
    </div>
  );
}

export default Home;
