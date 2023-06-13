import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { avatar } from "../assets/image/image";
function Activities() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4 justify-end px-3">
        <AiOutlineMessage size={20} className="text-black"/>
        <IoIosNotifications size={20}/>
        <div className="w-8 h-8">
          <img src={avatar} className="w-full h-full" />
        </div>
        <MdOutlineKeyboardArrowDown size={20}/>
      </div>
      <div className="flex items-center space-x-20 px-3">
         <div className="bg-[#ff5959]  rounded-md">
          <button class="text-white px-4 py-2">Deposit</button>
         </div>
         <div className="bg-[#472ff7]  rounded-md">
          <button class="text-white px-4 py-2">Withdraw</button>
         </div>
      </div>
      <div>
        <h1 class="text-lg text-white font-medium px-3">My Assets</h1>
      </div>
    </div>
  );
}


export default Activities;
