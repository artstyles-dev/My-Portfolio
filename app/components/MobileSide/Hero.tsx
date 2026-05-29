"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-start items-center">
        <div className="space-y-5">
          <p className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">{t.common.role}</p>
          <h1 className="text-3xl font-semibold text-slate-700">{t.hero.greeting}</h1>
          <p className="text-5xl font-bold text-slate-950">{t.hero.name}</p>
          <p className="text-lg leading-relaxed text-slate-600">
            {t.hero.descriptionBefore}{" "}
            <span className="text-xl font-semibold text-blue-600">
              {t.common.role}
            </span>{" "}
            {t.hero.descriptionAfter}
          </p>
          <a href="/Jirut_CV.pdf" target="_blank" className="mb-10 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300">{t.common.downloadCv}</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
