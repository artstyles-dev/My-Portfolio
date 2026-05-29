import { Menu, X } from "lucide-react";
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
    <div className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 py-3 shadow-sm backdrop-blur-xl">
      <div className="flex justify-between items-center">
        <div className="px-5 text-lg font-black tracking-tight text-slate-950">
          Art<span className="text-blue-600">Styles</span>
        </div>
        <div className="flex items-center gap-2 pr-4">
          <LanguageToggle />
          <button onClick={handleClick} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm" aria-label="Toggle menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
      </div>

      <div
        className={`flex flex-col items-end justify-end space-y-2 overflow-hidden px-5 text-lg font-semibold text-slate-700 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 pt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <button onClick={handleHome} className="rounded-full px-4 py-1.5 hover:bg-slate-100">{t.nav.home}</button>
        <button onClick={handleAbout} className="rounded-full px-4 py-1.5 hover:bg-slate-100">{t.nav.skills}</button>
        <button onClick={handlePortfolio} className="rounded-full px-4 py-1.5 hover:bg-slate-100">{t.nav.portfolio}</button>
        <button onClick={handleContact} className="rounded-full px-4 py-1.5 hover:bg-slate-100">{t.nav.contact}</button>
      </div>
    </div>
  );
};

export default NavbarMobile;
