import React from "react";

const AboutMe = () => {
  return (
    <div className="h-full md:p-10 lg:p-20 xl:p-30">
      <div className="h-full flex flex-col justify-start items-center">
        <h1 className="text-5xl xl:text-6xl font-bold text-center mb-5">About Me</h1>
        <div>
          <p className="text-3xl font-semibold mb-2">
            สวัสดีครับ ผมชื่อ อาร์ต ( จิรัฐ บุญให้ )
          </p>

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
{/* 
        <div className="leading-relaxed">
          <h2 className="text-3xl font-semibold mb-2">เป้าหมายของผม</h2>
          <p>
            มุ่งมั่นที่จะพัฒนาทักษะการเขียนโค้ด และสร้างผลงานที่มีคุณภาพ
            เพื่อเติบโตในสายอาชีพ{" "}
            <span className="text-amber-300 text-2xl font-semibold">
              Frontend Developer
            </span>{" "}อย่างมืออาชีพ
            และสร้างเว็บไซต์ที่คนอยากใช้งานจริง
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
