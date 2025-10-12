import React from "react";
import AboutMe from "../components/SideTwo/AboutMe";
import Skill from "../components/SideTwo/Skill";
import { motion } from "motion/react";

const AboutmeSkill = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex">
        <div className="grid grid-cols-2">
          {/* Left Side */}
        <motion.div
          className="text-white text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AboutMe />
        </motion.div>
          {/* Right Side */}
        <motion.div
          className="text-white text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Skill />
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutmeSkill;
