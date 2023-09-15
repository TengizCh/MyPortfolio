import React from "react";
import "./contact.scss";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import { Input } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const { TextArea } = Input;

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1>Contact</h1>
        <div className="contact_inner">
          <div className="left_div">
            <TypeAnimation
              sequence={["Gmail: tengizchar@gmail.com", 4000]}
              speed={50}
              repeat={Infinity}
              className="contact_text"
            />
            <div className="icon_div">
              <a href="https://github.com/TengizCh">
                <AiFillGithub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/tengiz-charkviani-89893122b/">
                <AiFillLinkedin className="icon" />
              </a>
              <a href="https://www.gmail.com">
                <BiLogoGmail className="icon" />
              </a>
            </div>
          </div>
          <div className="right_div">
            <h2>email form</h2>
            <Input
              className="contact_input"
              size="large"
              placeholder="Name"
              prefix={<UserOutlined />}
            />
            <Input
              className="contact_input"
              size="large"
              placeholder="Email"
              prefix={<MailOutlined />}
            />
            <TextArea
              className="contact_input"
              size="large"
              placeholder="Message..."
              showCount
              maxLength={100}
            />
            <button style={{ alignSelf: "flex-end" }} className="btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
