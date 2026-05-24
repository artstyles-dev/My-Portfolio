import React from 'react'

const SkillMobile = () => {
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
      <div className="h-full flex flex-col mt-10">
        <div className="grid grid-cols-2 gap-5">
          {skillCategories.map((item, index) => (
            <div
              key={index}
              className="glassPopup"
            >
              <h2 className="text-2xl font-semibold text-center text-amber-400 p-3 overflow-hidden">
                {item.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3 p-3 mb-1">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-lg glass px-2 py-2"
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