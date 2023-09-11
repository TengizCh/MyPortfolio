import React, { useState, useEffect } from "react";

import Main from "./components/Main";
import Navbar from "./components/navbar";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";
import { BiLogoReact } from "react-icons/bi";

import Skills from "./components/Skills";
import AnimatedRoutes from "./Routes/animatedRoutes";

export function App() {
  return (
    <>
      <div className="app">
        {/* <AnimatedCursor
          innerSize={18}
          outerSize={22}
          innerScale={0.5}
          outerScale={1.5}
          outerAlpha={0}
          outerStyle={{
            border: "2px solid var(--mediumgray)",
          }}
          innerStyle={{
            backgroundColor: "var(--purple)",
          }}
          hasBlendMode={true}
        /> */}
        <AnimatedRoutes />
      </div>
    </>
  );
}
