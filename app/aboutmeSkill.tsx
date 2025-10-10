import React from "react";
import AboutMe from "./components/SideTwo/AboutMe";
import Skill from "./components/SideTwo/Skill";

const AboutmeSkill = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex">
        <div className="grid grid-cols-2">
          {/* Left Side */}
          <div className="text-white text-xl">
            <AboutMe />
          </div>
          {/* Right Side */}
          <div className="text-white text-xl">
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutmeSkill;
