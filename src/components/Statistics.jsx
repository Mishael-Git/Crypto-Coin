import React from "react";
import {FaArrowDown, FaArrowUp} from "react-icons/fa"
function Statistics() {
  return (
    <div className="space-y-7">
      <div>
        <input type="text" />
      </div>

      <div className="flex flex-row items-center">
        {/* LEFT */}
        <div className="px-3">
          <div className="flex flex-row items-center space-x-8">
            <p>Balance</p>
            <div className="flex items-center rounded-lg px-2 bg-[#12e2a4] ">
            <FaArrowUp size={9}/>
            <p>12.56%</p>
            </div>
            </div>
            <h1 class="text-lg">$64,579.00</h1>
          </div>
           {/* MIDDLE */}
        <div className="px-3">
        <div className="flex flex-row items-center space-x-8">
            <p>Total profit</p>
            <div className="flex items-center rounded-lg px-2 bg-[#12e2a4] ">
            <FaArrowUp size={9}/>
            <p>12.56%</p>
            </div>
            </div>
            <h1 class="text-lg">$64,579.07</h1>
        </div>
        {/* RIGHT */}
        <div className="px-3">
        <div className="flex flex-row items-center space-x-8">
            <p>Transaction</p>
            <div className="flex items-center rounded-lg px-2 bg-[#f23456] ">
            <FaArrowDown size={9}/>
            <p>-2.65%</p>
            </div>
            </div>
            <h1 class="text-lg">$64,579.55</h1>
        </div>
        </div>
      </div>
  );
}

export default Statistics;
