import React from "react";
import { BiBitcoin } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { MdIncompleteCircle, MdAnalytics } from "react-icons/md";
import { FaStackExchange, FaExchangeAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="space-y-12 px-6  w-[20%] h-screen">
      <div className=" rounded-full bg-yellow-500 w-8">
        <BiBitcoin
          size={30}
          className="text-white  font-extrabold cursor-pointer"
        />
      </div>
      <div className="bg">
        <ul className="space-y-6">
          {/* Dashboard */}
          <div className="flex items-center hover:bg-[#a7fff3] space-x-1 w-[10%] px-2  rounded-xl">
            <RxDashboard className="text" />
            <li class="cursor-pointer font-medium ">Dashboard</li>
          </div>
          {/* Market */}
          <div className="flex items-center hover:bg-[#a7fff3] space-x-1 w-[10%] px-2  rounded-xl">
          <Link to="/market"> <MdIncompleteCircle /> </Link>
            <Link to="/market">
            <li class="cursor-pointer font-medium">Market</li></Link>
          </div>
          {/* Exchange */}
          <div className="flex items-center hover:bg-[#a7fff3] space-x-1 w-[10%] px-2  rounded-xl">
            <FaExchangeAlt />
            <li class="cursor-pointer font-medium ">Exchange</li>
          </div>
          {/* Transaction> */}
          <div className="flex items-center hover:bg-[#a7fff3] space-x-1 w-[10%] px-2  rounded-xl">
            <FaStackExchange />
            <li class="cursor-pointer font-medium ">Transaction</li>
          </div>
          {/* Cards */}
          <div className="flex items-center hover:bg-[#a7fff3] space-x-1 w-[10%] px-2  rounded-xl">
            <BsCreditCard2Back />
            <li class="cursor-pointer font-medium ">Cards</li>
          </div>
          {/* Analytics */}
          <div className="flex items-center hover:bg-[#a7fff3] space-x-1 w-[10%] px-2  rounded-xl">
            <MdAnalytics />
            <li class="cursor-pointer font-medium ">Analytics</li>
          </div>
          {/* Setting */}
          <div className="flex items-center hover:bg-[#a7fff3] space-x-1 w-[10%] px-2  rounded-xl">
            <AiFillSetting />
            <li class="cursor-pointer font-medium ">Setting</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
