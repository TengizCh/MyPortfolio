import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "../components/Main";
import Skills from "../components/Skills";
import { BiLogoReact } from "react-icons/bi";
import Navbar from "../components/navbar";
import { AnimatePresence } from "framer-motion";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

const AnimatedRoutes = () => {
  const [loading, setLoading] = useState(false);
  //   const [homeActive, setHomeActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
    setLoading(false);
  }, []);

  //   const handleChange = () => {
  //     if (location.pathname === "/") {
  //       setHomeActive(false);
  //     } else {
  //       setHomeActive(true);
  //     }
  //   };

  return (
    <>
      {!loading ? (
        <div className="loader_container">
          <div className="loader_inner">
            <BiLogoReact className="spin_icon" />
            <p data-content="Loading..." className="spin_text">
              Loading...
            </p>
          </div>
        </div>
      ) : (
        <>
          <AnimatePresence>
            {location.pathname === "/" ? null : <Navbar />}
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Main />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default AnimatedRoutes;
