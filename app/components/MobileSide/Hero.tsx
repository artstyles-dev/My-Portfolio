"use client";

import React from "react";
import { ArrowDownToLine, Github } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full">
      <div className="flex h-full flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-slate-700 lg:text-3xl">{t.hero.greeting}</h1>
            <p className="bg-clip-text text-black text-5xl font-black lg:text-8xl">{t.hero.name}</p>
          </div>
          <p className="text-lg leading-8 text-slate-600 lg:text-2xl lg:leading-10">
            {t.hero.descriptionBefore}{" "}
          <span className="font-semibold text-blue-600">
            {t.common.role}
          </span>{" "}
            {t.hero.descriptionAfter}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="/Jirut_CV.pdf" target="_blank" className="shine-card inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-blue-600">
              <ArrowDownToLine className="h-4 w-4" />
              {t.common.downloadCv}
            </a>
            <a href="https://github.com/artstyles-dev" target="_blank" className="shine-card inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-950 hover:text-slate-950" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
