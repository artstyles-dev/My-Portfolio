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
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"})
    setIsOpen(false)
  }
  const handlePortfolio = ()=>{
    document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"})
    setIsOpen(false)
  }
  const handleContact = ()=>{
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
    setIsOpen(false)
  }

  return (
    <div className="fixed left-0 z-50 w-full border-b border-slate-200/80 bg-white/85 py-3 shadow-sm backdrop-blur-xl">
      <div className="flex justify-between">
        <div className="px-5 text-lg font-bold text-slate-950">ArtStyles</div>
        <div>
            <button onClick={handleClick} className="px-5 text-slate-700">
          <Menu />
        </button>
        </div>
        
      </div>

      <div
        className={`flex flex-col items-end justify-end space-y-2 overflow-hidden px-5 text-xl font-semibold text-slate-700 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p onClick={handleHome}>Home</p>
        <p onClick={handleAbout}>Skills</p>
        <p onClick={handlePortfolio}>Portfolio</p>
        <p onClick={handleContact}>Contact</p>
      </div>
    </div>
  );
};

export default NavbarMobile;
