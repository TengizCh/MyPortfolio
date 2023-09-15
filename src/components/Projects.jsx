import React, { useRef } from "react";

import "./projects.scss";

// animation

import { motion, useScroll } from "framer-motion";

import { FiLink } from "react-icons/fi";

const Projects = () => {
  //   const item = {
  //     hidden: { y: 20, opacity: 0 },
  //     visible: {
  //       y: 0,
  //       opacity: 1,
  //     },
  //   };

  //   const data = [
  //     { id: 1, title: "Flight Agency Application", description: 'The application is constructed using React.js, featuring a responsive design and enhanced with dynamic animations powered by   AOS.'},
  //     { id: 2, text: "Live Weather Application" },
  //   ];

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1>Projects</h1>
        <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>

        <ul className="proj_list" ref={ref}>
          <li className="proj_items">
            <p>Flight Agency Application ✈️</p>
            <a href="https://tengizch.github.io/Flight-booking-Application/">
              <FiLink className="app_link" />
            </a>
            <p className="bottom_text">
              The application is constructed using React.js, featuring a
              responsive design and enhanced with dynamic animations powered by
              AOS.
            </p>
          </li>
          <li className="proj_items">
            <p>Live Weather Application 🌦️</p>
            <a href="https://tengizch.github.io/weather-app/">
              <FiLink className="app_link" />
            </a>
            <p className="bottom_text">
              The application is constructed using React.js, featuring a
              responsive design and enhanced with dynamic animations powered by
              AOS.
            </p>
          </li>
          <li className="proj_items">
            <p>Coming soon...</p>
          </li>
          <li className="proj_items">
            <p>Coming soon...</p>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Projects;
