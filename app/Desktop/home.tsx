import React from "react";
import LeftSide from "../components/Side/LeftSide";
import RightSide from "../components/Side/RightSide";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid w-full max-w-6xl grid-cols-2 items-center gap-10">
        <motion.div
          className="text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <RightSide />
        </motion.div>

        <motion.div
          className="text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LeftSide />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
