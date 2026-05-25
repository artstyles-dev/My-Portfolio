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
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-full w-full flex">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex h-full w-full justify-center items-center px-8 pt-24">
          {activePage === "home" && <Home />}
          {activePage === "skills" && <AboutmeSkill />}
          {activePage === "portfolio" && <Portfolio />}
          {activePage === "contact" && <Contact />}
        </main>
      </div>
    </div>
  );
};

export default PagePc;
