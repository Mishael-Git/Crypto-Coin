import React from "react";
import { BiBitcoin } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdIncompleteCircle, MdAnalytics } from "react-icons/md";
import { FaStackExchange, FaExchangeAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="py-3">
    <div className="space-y-12 px-6 w-[20%] h-screen">
      <div className=" rounded-full bg-yellow-500 w-8 hover:bg-yellow-600">
        <BiBitcoin
          size={30}
          className="text-white  font-extrabold cursor-pointer"
        />
      </div>
      <div className="bg">
        <ul className="space-y-6">
          {/* Dashboard */}
          <div className="flex items-center hover:text-[#a7fff3] text- w-[100%] px-2  rounded-xl">
            <li class="cursor-pointer font-medium ">Dashboard</li>
          </div>
          {/* Market */}
          <div className="flex items-center hover:text-[#a7fff3] text- w-[100%] px-2  rounded-xl">
            <li class="cursor-pointer font-medium">Market</li>
          </div>
          {/* Exchange */}
          <div className="flex items-center hover:text-[#a7fff3] text- w-[100%] px-2  rounded-xl">
            <li class="cursor-pointer font-medium ">Exchange</li>
          </div>
          {/* Transaction> */}
          <div className="flex items-center hover:text-[#a7fff3] text- w-[100%] px-2  rounded-xl">
            <li class="cursor-pointer font-medium ">Transaction</li>
          </div>
          {/* Cards */}
          <div className="flex items-center hover:text-[#a7fff3] text- w-[100%] px-2  rounded-xl">
            <li class="cursor-pointer font-medium ">Cards</li>
          </div>
          {/* Analytics */}
          <div className="flex items-center hover:text-[#a7fff3] text- w-[100%] px-2  rounded-xl">
            <li class="cursor-pointer font-medium ">Analytics</li>
          </div>
          {/* Setting */}
          <div className="flex items-center hover:text-[#a7fff3] text- w-[100%] px-2  rounded-xl">
            <li class="cursor-pointer font-medium ">Setting</li>
          </div>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
