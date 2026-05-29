import { Menu } from "lucide-react";
import React, { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

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
      <div className="flex justify-between items-center">
        <div className="px-5 text-lg font-bold text-slate-950">ArtStyles</div>
        <div className="flex items-center gap-2 pr-4">
          <LanguageToggle />
          <button onClick={handleClick} className="text-slate-700">
            <Menu />
          </button>
        </div>
        
      </div>

      <div
        className={`flex flex-col items-end justify-end space-y-2 overflow-hidden px-5 text-xl font-semibold text-slate-700 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p onClick={handleHome}>{t.nav.home}</p>
        <p onClick={handleAbout}>{t.nav.skills}</p>
        <p onClick={handlePortfolio}>{t.nav.portfolio}</p>
        <p onClick={handleContact}>{t.nav.contact}</p>
      </div>
    </div>
  );
};

export default NavbarMobile;
