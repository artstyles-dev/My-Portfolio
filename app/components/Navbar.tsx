"use client";
import { motion } from "motion/react";
import React from "react";

interface NavProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar = ({ activePage, setActivePage }: NavProps) => {
  const menuItems = [
    { label: "Home", page: "home" },
    { label: "About Me & Skill", page: "aboutme" },
    { label: "Portfolio", page: "portfolio" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <div className="fixed left-0 w-full z-50 py-5 bg-transparent">
      <div className="flex justify-center items-center">
        <div className="flex gap-10 text-white">
          {menuItems.map((item) => (
            <div
              key={item.page}
              onClick={() => setActivePage(item.page)}
              className={`cursor-pointer pb-1 transition-all duration-300 ${
                activePage === item.page
                  ? "text-2xl"
                  : "text-gray-400 hover:text-white hover:text-2xl"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
