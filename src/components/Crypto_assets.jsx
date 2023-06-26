import React from "react";
import { FaBitcoin,FaEthereum } from "react-icons/fa";
import {SiLitecoin} from "react-icons/si"
function Crypto_assets() {
  return (
    <div className="space-y-4">
        {/* BITCOIN */}
      <div className="flex flex-row items-center bg-[#4fc0e8] rounded-lg justify-between px-3 ">
        <div className="flex items-center space-x-2">
        <FaBitcoin size={38} color="#f7931a"/>
        <div className="flex flex-col ">
        <div className="flex items-center space-x-1">
            <h1>Bitcoin</h1>
            <p class="text-sm font-thin text-slate-500">BTC</p>
        </div>
        <div><p className="text-red-700">-2.65%</p></div>
        </div>
        </div>
        <div className="flex flex-col items-end ">
            <p>1.55 BTC</p>
            <p>$600000</p>
        </div>
      </div>
 {/* ETHEREUM */}
 <div className="flex flex-row items-center bg-[#4fc0e8] rounded-lg justify-between px-3 ">
        <div className="flex items-center space-x-2">
        <FaEthereum size={40} className="bg-blue-700 px-2 py-2 rounded-full text-white"/>
        <div className="flex flex-col ">
        <div className="flex items-center space-x-1">
            <h1>Ethereum</h1>
            <p class="text-sm font-thin text-slate-500">ETH</p>
        </div>
        <div><p className="text-green-700">3.56%</p></div>
        </div>
        </div>
        <div className="flex flex-col items-end">
            <p>0.0669 ETH</p>
            <p>$500</p>
        </div>
      </div>
       {/* LITECOIN */}
 <div className="flex flex-row items-center bg-[#4fc0e8] rounded-lg justify-between px-3 ">
        <div className="flex items-center space-x-2">
        <SiLitecoin size={40}  className=" text-purple-700"/>
        <div className="flex flex-col ">
        <div className="flex items-center space-x-1">
            <h1>Litecoin</h1>
            <p class="text-sm font-thin text-slate-500">LTC</p>
        </div>
        <div><p className="text-red-700">-2.65%</p></div>
        </div>
        </div>
        <div className="flex flex-col items-end ">
            <p>10 LTC</p>
            <p>$1500</p>
        </div>
      </div>
            {/* TRON */}
 <div className="flex flex-row items-center bg-[#4fc0e8] rounded-lg justify-between px-3 ">
        <div className="flex items-center space-x-2">
        <FaEthereum size={40} className="bg-blue-700 px-2 py-2 rounded-full text-white"/>
        <div className="flex flex-col ">
        <div className="flex items-center space-x-1">
            <h1>Tron</h1>
            <p class="text-sm font-thin text-slate-500">TRX</p>
        </div>
        <div><p className="text-green-700">14.3%</p></div>
        </div>
        </div>
        <div className="flex flex-col items-end ">
            <p>900 TRX</p>
            <p>$1300</p>
        </div>
      </div>
      </div>
  );
}

export default Crypto_assets;
