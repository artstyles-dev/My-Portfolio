import React from "react";
import Portfolios from "./components/SideThree.tsx/Portfolio";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center px-6">
      <div className="flex flex-col lg:flex-row lg:space-x-12 w-full max-w-6xl">
        {/* Left Side - Intro */}
        <motion.div
          className="flex-1 flex flex-col justify-center text-white space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold">Hi, Im Styles</h1>
          <p className="text-lg text-gray-300">
            Frontend Developer passionate about building smooth and interactive
            web experiences. Check out some of my projects below!
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-500 transition"
            >
              Contact Me
            </a>
            <a
              href="#resume"
              className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-gray-900 transition"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side - Projects */}
        <motion.div
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Portfolios />
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;