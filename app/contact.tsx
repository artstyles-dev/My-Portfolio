import React from "react";
import InputMe from "./components/SideFour/InputMe";
import ContactMe from "./components/SideFour/ContactMe";

const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex">
        <div className="grid grid-cols-2">
          {/* Left Side */}
          <div className="text-white text-xl">
            <InputMe />
          </div>
          {/* Right Side */}
          <div className="text-white text-xl">
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
