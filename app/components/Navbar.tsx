"use client";
import React from "react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

interface NavProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar = ({ activePage, setActivePage }: NavProps) => {
  const { t } = useLanguage();
  const menuItems = [
    { label: t.nav.home, page: "home" },
    { label: t.nav.skills, page: "skills" },
    { label: t.nav.portfolio, page: "portfolio" },
    { label: t.nav.contact, page: "contact" },
  ];
  const activeIndex = Math.max(
    menuItems.findIndex((item) => item.page === activePage),
    0
  );

  return (
    <div className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <div className="flex justify-center items-center">
        <div className="relative grid grid-cols-4 rounded-full border border-slate-200/80 bg-white/80 p-1 text-sm font-medium text-slate-500 shadow-lg shadow-slate-200/60 backdrop-blur-xl">
          <span
            className="absolute left-1 top-1 h-[calc(100%-8px)] w-[calc(25%-2px)] rounded-full bg-slate-950 shadow-md shadow-slate-300/60 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setActivePage(item.page)}
              className={`relative z-10 rounded-full px-5 py-2 transition-colors duration-300 ${
                activePage === item.page
                  ? "text-white"
                  : "hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="ml-3">
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
