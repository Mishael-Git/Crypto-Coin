import React from "react";
import { BsArrowUpRight,BsArrowDownLeft } from "react-icons/bs";
function Last_activities() {
  return (
    <div className="space-y-4">
        <div className="flex flex-row items-center bg-[#4fc0e8] rounded-lg justify-between px-3 ">
          <div className="flex items-center space-x-2">
            <BsArrowUpRight
              size={35}
              className="bg-gradient-to-b from-slate-600 to-slate-400 px-2 py-2"
            />
            <div className="flex flex-col ">
              <div className="flex items-center space-x-1">
                <h1>Deposit</h1>
                <p class="text-sm font-thin text-slate-500">TRX</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Today 19:12</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end ">
            <p className="text-green-700">+100 TRX</p>
          </div>
        </div>
{/*          */}
        <div className="flex flex-row items-center bg-[#4fc0e8] rounded-lg justify-between px-3 ">
          <div className="flex items-center space-x-2">
            <BsArrowDownLeft
              size={35}
              className="bg-gradient-to-b from-slate-600 to-slate-400 px-2 py-2"
            />
            <div className="flex flex-col ">
              <div className="flex items-center space-x-1">
                <h1>Withdraw</h1>
                <p class="text-sm font-thin text-slate-500">TRX</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Today 19:12</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end ">
            <p className="text-red-700">-100 TRX</p>
          </div>
        </div>

        <div className="flex flex-row items-center bg-[#4fc0e8] rounded-lg justify-between px-3 ">
          <div className="flex items-center space-x-2">
            <BsArrowUpRight
              size={35}
              className="bg-gradient-to-b from-slate-600 to-slate-400 px-2 py-2"
            />
            <div className="flex flex-col ">
              <div className="flex items-center space-x-1">
                <h1>Deposit</h1>
                <p class="text-sm font-thin text-slate-500">TRX</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Today 19:12</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end ">
            <p className="text-green-700">+100 TRX</p>
          </div>
        </div>
    </div>
  );
}

export default Last_activities;
