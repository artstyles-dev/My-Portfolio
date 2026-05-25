"use client";
import React from "react";

interface NavProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar = ({ activePage, setActivePage }: NavProps) => {
  const menuItems = [
    { label: "Home", page: "home" },
    { label: "Skills", page: "skills" },
    { label: "Portfolio", page: "portfolio" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <div className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <div className="flex justify-center items-center">
        <div className="flex rounded-full border border-slate-200/80 bg-white/80 p-1 text-sm font-medium text-slate-500 shadow-lg shadow-slate-200/60 backdrop-blur-xl">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => setActivePage(item.page)}
              className={`rounded-full px-5 py-2 transition-all duration-300 ${
                activePage === item.page
                  ? "bg-slate-950 text-white shadow-md shadow-slate-300/60"
                  : "hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
