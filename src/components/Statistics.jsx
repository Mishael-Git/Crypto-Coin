import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { Stats1, Stats2, Stats3, Stats4 } from "./Info";
function Statistics() {
  return (
    <div className="space-y-7 py-3">
      <div>
        <input type="text" className="rounded-md w-[58%]" />
      </div>

      <div className="flex flex-row items-center bg-gradient-to-r from-blue-400 to-cyan-400 px-2 py-2 rounded-lg">
        {/* LEFT */}
        <div className="px-3">
          <div className="flex flex-row items-center space-x-8">
            <p>Balance</p>
            <div className="flex items-center rounded-lg px-2 bg-[#12e2a4] ">
              <FaArrowUp size={9} />
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
              <FaArrowUp size={9} />
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
              <FaArrowDown size={9} />
              <p>-2.65%</p>
            </div>
          </div>
          <h1 class="text-lg">$64,579.55</h1>
        </div>
      </div>
      {/* BITSTATS */}
      <div className="py-2 space-y-10">
        <div className="flex items-center justify-between px-2">
          {/* STATS1 */}
          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 px-2 py-2 rounded-lg">
            <Stats1 />
          </div>
          {/* STATS2 */}
          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 px-2 py-2 rounded-lg">
            <Stats2 />
          </div>
          {/* STATS3 */}
          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 px-2 py-2 rounded-lg">
            <Stats3 />
          </div>
        </div>
        {/* STATS4 */}
        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 px-2 py-2 rounded-lg">
          <Stats4 />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
