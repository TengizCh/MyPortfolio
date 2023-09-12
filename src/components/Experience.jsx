import React, { useState } from "react";
import "./experience.scss";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Experience = () => {
  const [activeMod, setActiveMod] = useState(false);
  const [activeBambussa, setActiveBambussa] = useState(false);

  const handleChangeMod = () => {
    setActiveMod((prev) => !prev);
    setActiveBambussa(false);
  };

  const handleChangeBamb = () => {
    setActiveBambussa((pre) => !pre);
    setActiveMod(false);
  };

  return (
    <motion.div
      className="main flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1>Experience</h1>
        <div className="inner_container">
          <div className="experience_titles">
            <TypeAnimation
              sequence={["Choose one... 👇", 3000]}
              speed={20}
              repeat={Infinity}
              className="text_animation_exp"
            />
            <ul className="exp_list">
              <button className="exp_items" key={1} onClick={handleChangeMod}>
                Ministry of Defense of Georgia ➡️
              </button>
              <button className="exp_items" key={2} onClick={handleChangeBamb}>
                Startup Bambussa ➡️
              </button>
            </ul>
          </div>
          {activeMod ? (
            <div className="inner_container_second">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0, 0.7, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 9,
                    stiffness: 70,
                    restDelta: 0.001,
                  },
                }}
                className="experience_details"
              >
                <p className="exp_title">MOD</p>
                <p className="exp_position">React Developer</p>
                <p className="exp_date">2022 September - Present</p>
                <ul className="detail_list">
                  <li className="detail_items">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old
                  </li>
                  <li className="detail_items">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested
                  </li>
                  <li className="detail_items">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </li>
                </ul>
              </motion.div>
            </div>
          ) : "" || activeBambussa ? (
            <div className="inner_container_second">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0, 0.7, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 9,
                    stiffness: 70,
                    restDelta: 0.001,
                  },
                }}
                className="experience_details"
              >
                <p className="exp_title">Bambussa</p>
                <p className="exp_position">React Developer</p>
                <p className="exp_date">2021 July - 2021 December</p>
                <ul className="detail_list">
                  <li className="detail_items">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old
                  </li>
                  <li className="detail_items">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested
                  </li>
                  <li className="detail_items">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </li>
                </ul>
              </motion.div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
