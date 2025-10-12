import { Menu } from "lucide-react";
import React, { useState } from "react";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleHome = ()=>{
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"})
    setIsOpen(false)
  }
  const handleAbout = ()=>{
    document.getElementById("aboutme")?.scrollIntoView({behavior:"smooth"})
    setIsOpen(false)
  }
  const handleContact = ()=>{
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
    setIsOpen(false)
  }

  return (
    <div className="backdrop-blur-xs fixed left-0 w-full z-50 py-3">
      <div className=" flex justify-between">
        <div className="px-3">Logo</div>
        <div>
            <button onClick={handleClick} className="px-4">
          <Menu />
        </button>
        </div>
        
      </div>

      <div
        className={`px-4 text-2xl font-bold space-y-2 overflow-hidden flex flex-col justify-end items-end transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p onClick={handleHome}>Home</p>
        <p onClick={handleAbout}>About Me</p>
        <p>Portfolio</p>
        <p onClick={handleContact}>Contact</p>
      </div>
    </div>
  );
};

export default NavbarMobile;
