"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const WorkExperience = () => {
  const { t } = useLanguage();

  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-between overflow-hidden p-1">
        <div className="space-y-2 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {t.projects.work.type}
          </p>
          <h1 className="text-lg font-bold text-slate-950">
            {t.projects.work.title}
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 xl:text-base">
            {t.projects.work.description}
          </p>
          <p className="text-sm leading-relaxed text-slate-500">
            <span className="font-semibold text-blue-600">{t.common.tech}</span>{" "}
            TypeScript, Tailwind CSS, React Native, NativeWind, Supabase
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
