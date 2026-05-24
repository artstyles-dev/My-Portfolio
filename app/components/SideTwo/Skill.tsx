"use client";

import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Skill = () => {
  const swiperRef = useRef<SwiperType | null>(null);

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
    <div className="min-h-full w-full flex flex-col items-center justify-center px-4 pt-28 pb-10 md:px-10 md:pt-32 lg:pt-36 xl:pt-40">
      
      <div className="w-full max-w-6xl">
        
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
                  <h2 className="text-xl font-semibold text-center text-amber-400 p-4 border-b border-white/10">
                    {item.title}
                  </h2>
                  <div className="flex flex-wrap justify-center gap-2 p-6">
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="text-sm glass px-3 py-2 rounded-lg">
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
          className="glass px-4 py-2 font-semibold"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          Prev
        </button>
        <button
          className="glass px-4 py-2 font-semibold"
          onClick={() => swiperRef.current?.slideNext()}
        >
          Next
        </button>
      </div>
        </div>

        {/* --- DESKTOP VIEW: Flex Grid (แสดงเฉพาะจอ md ขึ้นไป) --- */}
        <div className="hidden lg:flex flex-wrap justify-center gap-6 -mt-20">
          {skillCategories.map((item, index) => (
            <div
              key={index}
              className="glassPopup flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[400px]"
            >
              <h2 className="text-xl xl:text-2xl font-semibold text-center text-amber-400 p-4 border-b border-white/10">
                {item.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3 p-5">
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
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skill;