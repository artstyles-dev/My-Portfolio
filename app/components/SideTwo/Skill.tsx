import React from "react";

const Skill = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap" , "Shadcn UI" ],
    },
    {
      title: "Database",
      skills: ["MySQL" , "PostgreSQL"],
    },
    {
      title: "Tools",
      skills: ["Git / GitHub", "VS Code" , "Figma"],
    },
  ];

  return (
    <div className="h-full md:p-10 lg:py-30 lg:px-5 xl:py-30 xl:px-10 2xl:p-30">
      <div className="h-full flex flex-col justify-start items-center">
        <h1 className="text-5xl xl:text-6xl font-bold text-center mb-5">My Skills</h1>

        <div className="grid grid-cols-2 gap-5">
          {skillCategories.map((item, index) => (
            <div
              key={index}
              className="glassPopup"
            >
              <h2 className="text-xl xl:text-2xl font-semibold text-center text-amber-400 p-3 overflow-hidden">
                {item.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3 p-3 mb-1">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-sm xl:text-lg glass px-2 xl:px-4 py-2"
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
  );
};

export default Skill;