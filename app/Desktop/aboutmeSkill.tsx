import React from "react";
import Skill from "../components/SideTwo/Skill";
import { motion } from "motion/react";

const AboutmeSkill = () => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="flex w-full justify-center">
        <div className="w-full">
        <motion.div
          className="w-full text-xl"
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
