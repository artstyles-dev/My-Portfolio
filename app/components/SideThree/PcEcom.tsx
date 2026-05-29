"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const PcEcom = () => {
  const { t } = useLanguage();

  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-between overflow-hidden p-1">
        <div className="space-y-2 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {t.projects.ecommerce.type}
          </p>
          <h1 className="flex flex-wrap items-center gap-2 text-xl font-bold text-slate-950">
            <span>{t.projects.ecommerce.title}</span>
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
            {t.projects.ecommerce.description}
          </p>
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-blue-600">{t.common.tech}</span> React,
            Axios, Zustand, Tailwind CSS, Node.js, Express, MySQL
          </p>
        </div>
      </div>
    </div>
  );
};

export default PcEcom;
