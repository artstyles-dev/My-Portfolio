"use client";

import React from 'react'
import { useLanguage } from '../../context/LanguageContext';

const SkillMobile = () => {
      const { t } = useLanguage();
      const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Shadcn UI", "React Native"],
    },
    {
      title: "State Management",
      skills: ["Redux Toolkit", "Zustand"],
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "RESTful API", "PostgreSQL", "MySQL", "Supabase"],
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "Postman", "Figma", "VS Code", "Docker", "ClickUp", "Trello"],
    },
  ];
  return (
    <div className="h-full">
      <div className="mt-16 flex h-full flex-col">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{t.sections.skills}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[430px]:grid-cols-2">
          {skillCategories.map((item, index) => (
            <div
              key={index}
              className="glassPopup overflow-hidden"
            >
              <h2 className="border-b border-slate-200 p-3 text-center text-lg font-semibold text-slate-950">
                {item.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3 p-3 mb-1">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillMobile
