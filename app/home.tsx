import React from "react";
import LeftSide from "./components/Side/LeftSide";
import RightSide from "./components/Side/RightSide";

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex">
        <div className="flex flex-col lg:grid grid-cols-2">
          {/* Right Side */}
          <div className="text-white text-xl">
            <RightSide />
          </div>
          {/* Left Side */}
          <div className="text-white text-xl">
            <LeftSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
