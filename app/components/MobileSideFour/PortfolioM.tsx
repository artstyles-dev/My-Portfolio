import React from "react";
import PcEcom from "../SideThree/PcEcom";
import Restaurants from "../SideThree/Restaurants";
import TodoList from "../SideThree/TodoList";

const PortfolioM = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <div className="space-y-5">
        <div className="glass">
        <PcEcom />
      </div>
      <div className="glass">
        <Restaurants />
      </div>
      <div className="glass">
        <TodoList />
      </div>
      </div>
    </div>
  );
};

export default PortfolioM;
