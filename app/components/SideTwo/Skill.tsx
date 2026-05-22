import React from "react";

const Skill = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Database",
      skills: ["MySQL" , "PostgreSQL" , "Supabase"],
    },
    {
      title: "Tools",
      skills: ["Git / GitHub", "VS Code" , "Figma" , "Postman"],
    },
    {
      title: "Framework & Library",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap" , "Shadcn UI" , "React Native" , "Express.js" , "Node.js" , "Redux Toolkit" , "Zustand"], 
    },
  ];

  return (
    <div className="min-h-full md:p-10 lg:py-20 lg:px-5 xl:py-24 xl:px-20 2xl:p-30 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* <h1 className="text-5xl xl:text-6xl font-bold text-center mb-5">My Skills</h1> */}

        {/* ใช้ Grid แขนงพิเศษ: จอเล็กคอลัมน์เดียว จอกลาง 3 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((item, index) => {
            // เช็คว่าเป็นกล่อง Framework & Library หรือไม่ (กล่องสุดท้าย)
            const isFramework = item.title === "Framework & Library";
            
            return (
              <div
                key={index}
                // ถ้าเป็น Framework ให้กางพื้นที่ยาว 3 คอลัมน์เต็มในจอใหญ่ (md:col-span-3)
                className={`glassPopup ${isFramework ? "md:col-span-3" : ""}`}
              >
                <h2 className="text-xl xl:text-2xl font-semibold text-center text-amber-400 p-4 border-b border-white/10">
                  {item.title}
                </h2>
                <div className={`flex flex-wrap justify-center gap-3 p-5 ${isFramework ? "max-w-4xl mx-auto" : ""}`}>
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm xl:text-base glass px-3 py-2 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;