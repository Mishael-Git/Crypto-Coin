import React from "react";
import { Active, Side, Stats } from "./Info";
function DashBoard() {
  return (
  //Sidebar
    <div className="px-[1%] space-x-[19%] ">
      <div className="py-9">
        <Side />
      </div>
      <div className="flex h-screen flex-grow">
        {/* Body middle */}
        <div className="h-screen flex-grow">
          <div >
            <Stats />
          </div>
        </div>
        {/* Body right */}
        <div className="w-[40%] h-screen ">
          <div className="h-full rounded-2xl py-5 px-6">
            <Active />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
