import React from "react";
import InputMe from "../components/SideFour/InputMe";
import ContactMe from "../components/SideFour/ContactMe";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Side */}
        <motion.div
          className="text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <InputMe />
        </motion.div>
          {/* Right Side */}
        <motion.div
          className="text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ContactMe />
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
