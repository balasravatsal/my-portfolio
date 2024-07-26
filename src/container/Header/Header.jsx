import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const resumeLink = import.meta.env.VITE_REACT_APP_RESUME_LINK

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Vatsal</h1>
            <p className="p-text">Full Stack Developer</p>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <a href="https://leetcode.com/secondwarbringer/" style={{ textDecoration: "None" }}>
            <p className="p-text" style={{ fontWeight: 900 }}>
            <SiLeetcode />  LeetCode  (250+)
            </p>
          </a>
          <a href="https://www.naukri.com/code360/profile/balasravatsal" style={{ textDecoration: "None" }}>
            <p className="p-text" style={{ fontWeight: 900 }}>
            <SiCodingninjas /> Coding Ninjas (400+)
            </p>
          </a>
          {/* <a href="https://www.codechef.com/users/balasravatsal" style={{ textDecoration: "None" }}>
            <p className="p-text" style={{ fontWeight: 900 }}>
            <SiCodechef /> CodeChef
            </p>
          </a> */}
        </div>
        
        <a
          href = {resumeLink}
          download="Vatsal_Resume.pdf"
          className="tag-cmp app__flex"
          style={{ textDecoration: "None" }}
        >
          
          <p className="p-text" style={{ fontWeight: 900 }}>
            Download My Resume
          </p>
        </a>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.myPic} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.node, images.betterReact, images.c].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
