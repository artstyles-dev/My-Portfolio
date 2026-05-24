import React from "react";

const Restaurants = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-center rounded-xl p-2 shadow-lg">
        <div className="space-y-4 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
            Practice Project
          </p>
          <h1 className="text-xl font-bold text-amber-300">
            Restaurant Menu Web
          </h1>
          <p className="text-sm leading-relaxed text-white/85 xl:text-base">
            A restaurant website showcasing menus and
recipes sourced from YouTube videos.Built
with modern frontend tools, the app consumes
external APIs to fetch dynamic content.Users
can browse menus, view recipe instructions,
and explore culinary content in an interactive
interface.
          </p>
          <p className="text-sm text-white/75">
            <span className="font-semibold text-amber-200">Tech:</span> Next.js,
            API Routes, Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
