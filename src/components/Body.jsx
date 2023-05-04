import React from "react";
import { Nav } from "./Info";
import MainBody from "./MainBody";

function Body() {
  return (
    <div className="bg-[url('./public/Bitbackground1.jpg')]">
      <div>
        <Nav />
      </div>

      <div>
        <MainBody/>
      </div>
    </div>
  );
}

export default Body;
