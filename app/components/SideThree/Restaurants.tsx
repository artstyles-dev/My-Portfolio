import React from "react";

const Restaurants = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-between overflow-hidden p-1">
        <div className="space-y-4 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Practice Project
          </p>
          <h1 className="flex flex-wrap items-center gap-2 text-xl font-bold text-slate-950">
            <span>Restaurant Menu Web</span>
            <a
              href="https://myrestaurant-styles.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="items-center text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 transition"
            >
              Demo
            </a>
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 xl:text-base">
            A restaurant website showcasing menus and
recipes sourced from YouTube videos.Built
with modern frontend tools, the app consumes
external APIs to fetch dynamic content.Users
can browse menus, view recipe instructions,
and explore culinary content in an interactive
interface.
          </p>
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-blue-600">Tech:</span> Next.js,
            API Routes, Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;


