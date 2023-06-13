import React from "react";
import { Active, Side, Stats } from "./Info";
function DashBoard() {
  return (
  //Sidebar
    <div className="flex xl:flex-row md:flex-row md:space-x-[3%]  sm:flex-col xl:space-x-[2%] px-5  py-4">
      <div className="border">
        <Side />
      </div>
        {/* Body middle */}
        <div className="border">
            <Stats />
          </div>
        {/* Body right */}
          <div className="border">
            <Active />
          </div>
        </div>
  );
}

export default DashBoard;
