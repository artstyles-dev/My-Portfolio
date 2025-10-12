import React from "react";
import { motion } from "framer-motion";
import TodoList from "../components/SideThree/TodoList";
import PcEcom from "../components/SideThree/PcEcom";
import Restaurants from "../components/SideThree/Restaurants";
import AllPort from "../components/SideThree/AllPort";

const Portfolio = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex px-30">
          <motion.div
            className="text-white text-xl lg:hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AllPort />
          </motion.div>
        <div className="hidden lg:grid grid-cols-3 gap-3">
          {/* Left Side */}
          <motion.div
            className="text-white text-xl hover:scale-105 transform duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Restaurants />
          </motion.div>
          {/* Right Side */}
          <motion.div
            className="text-white text-xl hover:scale-105 transform duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <TodoList />
          </motion.div>
          {/* Side */}
          <motion.div
            className="text-white text-xl hover:scale-105 transform duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <PcEcom />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
