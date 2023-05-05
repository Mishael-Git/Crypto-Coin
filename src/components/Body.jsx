import React from "react";
import { Nav } from "./Info";
import Home from "./Home";

function Body() {
  return (
    <div className="">
      <div>
        <Nav />
      </div>

      <div>
        <Home/>
      </div>
    </div>
  );
}

export default Body;
