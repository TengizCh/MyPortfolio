import React from "react";
import "./skills.scss";

import { motion } from "framer-motion";

// ICONS

import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import TS from "../assets/TS.svg";
import SASS from "../assets/SASS.svg";
import FIREBASE from "../assets/FIREBASE.svg";
import VITE from "../assets/VITE.svg";
import REACT from "../assets/REACT.svg";
import REDUX from "../assets/REDUX.svg";
import STYLED from "../assets/styledcomponents.svg";
import RN from "../assets/RN.png";
import MONGO from "../assets/MONGO.svg";
import GIT from "../assets/GIT.svg";
import NPM from "../assets/NPM.svg";
import MUI from "../assets/MUI.png";
import FRAMER from "../assets/FRAMER.webp";
import BOOTSTRAP from "../assets/BOOTSTRAP.svg";

// animation

import { TypeAnimation } from "react-type-animation";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex"
    >
      <div className="container">
        <h1>My Skills</h1>
        <div className="animation_cont">
          <TypeAnimation
            sequence={[
              "Proficient in React.js for building dynamic and interactive user interfaces, Strong understanding of JavaScript and ES6+ features, Experience with state management using Redux or Context API and Expertise in responsive web design using CSS and popular CSS frameworks like Bootstrap or Material-UI",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text_animation"
          />
        </div>
        {/* <p>
          
        </p> */}
        <div className="skills_single">
          <h2>programming languages:</h2>
          <div className="single_inner">
            <img src={HTML} />
            <img src={CSS} />
            <img src={JS} />
            <img src={TS} />
            <img src={SASS} />
            <img src={FIREBASE} />
            <img src={VITE} />
          </div>
        </div>
        <div className="skills_single">
          <h2>libraries and frameworks:</h2>
          <div className="single_inner">
            <img src={REACT} />
            <img src={RN} />
            <img src={REDUX} />
            <img src={STYLED} />
            <img src={MUI} />
            <img src={BOOTSTRAP} />
            <img src={FRAMER} />
          </div>
        </div>
        <div className="skills_single">
          <h2>other:</h2>
          <div className="single_inner">
            <img src={GIT} />
            <img src={MONGO} />
            <img src={NPM} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
