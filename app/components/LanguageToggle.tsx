"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="relative grid h-10 w-24 grid-cols-2 rounded-full border border-slate-200 bg-white p-1 text-xs font-bold text-slate-500 shadow-sm"
      aria-label="Language selector"
      role="group"
    >
      <span
        className={`absolute left-1 top-1 h-8 w-[calc(50%-4px)] rounded-full bg-slate-950 shadow-sm transition-transform duration-300 ease-out ${
          language === "en" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      <button
        type="button"
        onClick={() => setLanguage("th")}
        className={`relative z-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
          language === "th" ? "text-white" : "text-slate-600 hover:text-slate-950"
        }`}
        aria-pressed={language === "th"}
      >
        TH
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative z-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
          language === "en" ? "text-white" : "text-slate-600 hover:text-slate-950"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
