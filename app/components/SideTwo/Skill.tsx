"use client";

import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useLanguage } from "../../context/LanguageContext";

const Skill = () => {
  const swiperRef = useRef<SwiperType | null>(null);
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
    <div className="flex min-h-full w-full flex-col items-center justify-center px-6 pb-10 md:px-10">
      
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{t.sections.skills}</p>
          {/* <h1 className="mt-3 text-2xl font-bold text-slate-950 xl:text-5xl">เครื่องมือที่ใช้สร้างงาน</h1> */}
        </div>
        
        <div className="block lg:hidden w-full">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full max-w-sm overflow-hidden rounded-xl pb-12"
            style={{
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {skillCategories.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="glassPopup flex flex-col h-full min-h-[300px]">
                  <h2 className="border-b border-slate-200 p-4 text-center text-xl font-semibold text-slate-950">
                    {item.title}
                  </h2>
                  <div className="flex flex-wrap justify-center gap-2 p-6">
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* ปุ่ม Navigation สำหรับ Mobile */}
          <div className="mt-6 flex justify-center gap-4">
        <button
          className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          {t.common.prev}
        </button>
        <button
          className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm"
          onClick={() => swiperRef.current?.slideNext()}
        >
          {t.common.next}
        </button>
      </div>
        </div>

        {/* --- DESKTOP VIEW: Flex Grid (แสดงเฉพาะจอ md ขึ้นไป) --- */}
        <div className="hidden flex-wrap justify-center gap-5 lg:flex">
          {skillCategories.map((item, index) => (
            <div
              key={index}
              className="glassPopup flex w-full max-w-[390px] flex-col overflow-hidden sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <h2 className="border-b border-slate-200 p-4 text-center text-xl font-semibold text-slate-950 xl:text-2xl">
                {item.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3 p-5">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 xl:text-base"
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
