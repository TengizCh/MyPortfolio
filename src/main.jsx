import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./app";
// import Skills from "./components/Skills";

// const router = BrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/skills",
//     element: <Skills />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
