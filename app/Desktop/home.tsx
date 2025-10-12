// import React from "react";
// import LeftSide from "./components/Side/LeftSide";
// import RightSide from "./components/Side/RightSide";

// const Home = () => {
//   return (
//     <div className="flex justify-center items-center">
//       <div className="flex">
//         <div className="flex flex-col lg:grid grid-cols-2">
//           {/* Right Side */}
//           <div className="text-white text-xl">
//             <RightSide />
//           </div>
//           {/* Left Side */}
//           <div className="text-white text-xl">
//             <LeftSide />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import LeftSide from "../components/Side/LeftSide";
import RightSide from "../components/Side/RightSide";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col lg:grid grid-cols-2">
        {/* Left Side - Intro */}
        <motion.div
          className="text-white text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <RightSide />
        </motion.div>

        {/* Right Side - Projects */}
        <motion.div
          className="text-white text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LeftSide />
        </motion.div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
