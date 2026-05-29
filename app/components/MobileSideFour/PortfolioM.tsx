"use client";

import React from "react";
import PcEcom from "../SideThree/PcEcom";
import Restaurants from "../SideThree/Restaurants";
import TodoList from "../SideThree/TodoList";
import WorkExperience from "../SideThree/WorkExperience";
import { useLanguage } from "../../context/LanguageContext";

const PortfolioM = () => {
  const { t } = useLanguage();

  return (
    <div id="portfolio">
      <p className="mt-20 mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{t.sections.portfolio}</p>
      <div className="space-y-5">
        <div>
          <PcEcom />
        </div>
        <div>
          <Restaurants />
        </div>
        <div>
          <TodoList />
        </div>
        <div>
          <WorkExperience />
        </div>
      </div>
    </div>
  );
};

export default PortfolioM;
