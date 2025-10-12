'use client'
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Desktop/home";
import AboutmeSkill from "./Desktop/aboutmeSkill";
import Contact from "./Desktop/contact";
import Portfolio from "./Desktop/portfolio";

const PagePc = () => {

    const [activePage, setActivePage] = useState("home");

  return (
    <div className="h-full flex justify-center items-center">
      <div className="h-full flex">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <div className="flex justify-center items-center">
          {activePage === "home" && <Home />}
          {activePage === "aboutme" && <AboutmeSkill />}
          {activePage === "portfolio" && <Portfolio />}
          {activePage === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
};

export default PagePc;
