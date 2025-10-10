import React from "react";

const AboutMeMobile = () => {
  return (
    <div className="h-full my-10">
      <div className="h-full flex flex-col justify-start items-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">About Me</h1>
          <div>
            <p className="text-xl font-semibold mb-1">สวัสดีครับ</p>

            <p className="leading-relaxed text-neutral-300">
              ผมมีความสนใจในการพัฒนาเว็บไซต์และเว็บแอปพลิเคชั่น ในตำแหน่ง{" "}
              <span className="text-amber-300 text-xl font-semibold">
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
    </div>
  );
};

export default AboutMeMobile;
