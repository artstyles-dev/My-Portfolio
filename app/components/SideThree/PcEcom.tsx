import React from "react";

const PcEcom = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-between overflow-hidden p-1">
        <div className="space-y-2 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Full Stack Portfolio Project
          </p>
          <h1 className="flex flex-wrap items-center gap-2 text-xl font-bold text-slate-950">
            <span>E-commerce Web</span>
            <a
              href="https://stylesshop-pc.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="items-center text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 transition"
            >
              Demo
            </a>
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 xl:text-base">
            A fully functional e-commerce web application featuring secure user authentication and a role-based architecture. The customer storefront offers an intuitive shopping experience with dynamic cart management and a seamless checkout process. Concurrently, the dedicated Admin Dashboard provides comprehensive CRUD capabilities, enabling efficient management of product inventory and user orders.
          </p>
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-blue-600">Tech:</span> React,
            Axios, Zustand, Tailwind CSS, Node.js, Express, MySQL
          </p>
        </div>
      </div>
    </div>
  );
};

export default PcEcom;
