import React from "react";

const WorkExperience = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-between overflow-hidden p-1">
        <div className="space-y-2 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Work Experience
          </p>
          <h1 className="text-lg font-bold text-slate-950">
            Web App & Mobile App Development
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 xl:text-base">
            Developed a comprehensive full-stack logistics platform designed to optimize the collection of used oil from retail stores. The system comprises a web-based Admin Dashboard for operational management and a dedicated mobile application for field collectors to track tasks and routing.
          </p>
          <p className="text-sm leading-relaxed text-slate-500">
            <span className="font-semibold text-blue-600">Tech:</span>{" "}
            TypeScript, Tailwind CSS, React Native, NativeWind, Supabase
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
