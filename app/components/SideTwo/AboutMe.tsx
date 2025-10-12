import React from "react";

const AboutMe = () => {
  return (
    <div className="h-screen md:pl-10 lg:pl-10 xl:pl-20 overflow-y-scroll">
      <div className="h-full flex flex-col justify-center xl:justify-center items-center">
        <h1 className="text-5xl xl:text-6xl font-bold text-center mb-5">About Me</h1>
        <div>
          <p className="leading-relaxed mb-2">
            ผมมีความสนใจในการพัฒนาเว็บไซต์และเว็บแอปพลิเคชั่น
            ในตำแหน่ง{" "}
            <span className="text-amber-300 text-2xl font-semibold">
              Frontend Developer
            </span>{" "}
            ผมชอบการสร้างเว็บให้สวย ใช้งานง่าย และตอบโจทย์ผู้ใช้
            ผมให้ความสำคัญกับการออกแบบประสบการณ์ผู้ใช้ (UX/UI)
            และชอบทดลองเทคโนโลยีใหม่ ๆ
            เพื่อนำมาใช้พัฒนาเว็บไซต์ให้ทันสมัยอยู่เสมอ
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
