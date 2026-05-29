import React from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import TodoList from "../components/SideThree/TodoList";
import PcEcom from "../components/SideThree/PcEcom";
import Restaurants from "../components/SideThree/Restaurants";
import AllPort from "../components/SideThree/AllPort";
import WorkExperience from "../components/SideThree/WorkExperience";
import { useLanguage } from "../context/LanguageContext";

const floatUpVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center px-6 pb-10 md:px-10">
      <motion.div
        className="mx-auto w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={floatUpVariants}
      >
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            {t.sections.portfolio}
          </p>
          {/* <h1 className="mt-3 text-2xl font-bold text-slate-950 xl:text-5xl">ผลงานและประสบการณ์</h1> */}
        </div>
        <div className="text-xl lg:hidden">
          <AllPort />
        </div>
        <div className="hidden gap-5 lg:grid lg:grid-cols-2 xl:grid-cols-4">
          {/* Left Side */}
          <motion.div
            className="text-xl"
            whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
          >
            <WorkExperience />
          </motion.div>
          {/* Right Side */}
          <motion.div
            className="text-xl"
            whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
          >
            <PcEcom />
          </motion.div>
          {/* Side */}
          <motion.div
            className="text-xl"
            whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
          >
            <TodoList />
          </motion.div>
          <motion.div
            className="text-xl"
            whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
          >
            <Restaurants />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
