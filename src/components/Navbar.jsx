import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

// animation

import { motion } from "framer-motion";

// logos

import logo from "../assets/reactpurple.svg";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import react from "../assets/react.png";
// import native from "../assets/native.png";

const Navbar = () => {
  return (
    <motion.div
      className="navbar flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="novbar_one">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="navbar_two">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/skills">
          Skills
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/experience">
          Experience
        </Link>
        <Link className="link">Contact</Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
