import React from "react";

const PcEcom = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-center rounded-xl p-1 shadow-lg">
        <div className="space-y-2 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
            Full Stack Portfolio Project
          </p>
          <h1 className="text-xl font-bold text-amber-300">
           E-commerce Web
          </h1>
          <p className="text-sm leading-relaxed text-white/85 xl:text-base">
            A fully functional e-commerce web application featuring secure user authentication and a role-based architecture. The customer storefront offers an intuitive shopping experience with dynamic cart management and a seamless checkout process. Concurrently, the dedicated Admin Dashboard provides comprehensive CRUD capabilities, enabling efficient management of product inventory and user orders.
          </p>
          <p className="text-sm text-white/75">
            <span className="font-semibold text-amber-200">Tech:</span> React,
            Axios, Zustand, Tailwind CSS, Node.js, Express, MySQL
          </p>
        </div>
      </div>
    </div>
  );
};

export default PcEcom;
