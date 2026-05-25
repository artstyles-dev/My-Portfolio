import React from "react";
import PcEcom from "../SideThree/PcEcom";
import Restaurants from "../SideThree/Restaurants";
import TodoList from "../SideThree/TodoList";
import WorkExperience from "../SideThree/WorkExperience";

const PortfolioM = () => {
  return (
    <div id="portfolio">
      <p className="mt-20 mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Portfolio</p>
      {/* <h1 className="mb-5 mt-2 text-3xl font-bold text-slate-950">ผลงานและประสบการณ์</h1> */}
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
