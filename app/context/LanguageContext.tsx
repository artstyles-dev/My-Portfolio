"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "th" | "en";

type Dictionary = {
  nav: {
    home: string;
    skills: string;
    portfolio: string;
    contact: string;
  };
  common: {
    role: string;
    downloadCv: string;
    prev: string;
    next: string;
    tech: string;
  };
  hero: {
    greeting: string;
    name: string;
    descriptionBefore: string;
    descriptionAfter: string;
  };
  sections: {
    skills: string;
    portfolio: string;
    contact: string;
    social: string;
    contactTitle: string;
    socialTitle: string;
  };
  contact: {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    required: string;
    emailNotConfigured: string;
    success: string;
    failed: string;
  };
  projects: {
    work: { type: string; title: string; description: string };
    ecommerce: { type: string; title: string; description: string };
    todo: { type: string; title: string; description: string };
    restaurant: { type: string; title: string; description: string };
  };
};

const dictionaries: Record<Language, Dictionary> = {
  th: {
    nav: {
      home: "หน้าแรก",
      skills: "ทักษะ",
      portfolio: "ผลงาน",
      contact: "ติดต่อ",
    },
    common: {
      role: "Frontend Developer",
      downloadCv: "ดาวน์โหลด CV",
      prev: "ก่อนหน้า",
      next: "ถัดไป",
      tech: "เทคโนโลยี:",
    },
    hero: {
      greeting: "สวัสดีครับ ผม อาร์ต",
      name: "จิรัฐ บุญให้",
      descriptionBefore: "นักพัฒนาเว็บไซต์ เว็บแอปพลิเคชั่น และแอปพลิเคชั่นด้าน",
      descriptionAfter:
        "ออกแบบและพัฒนาเว็บไซต์และแอปพลิเคชั่นให้ใช้งานง่าย ดูสวยงาม และสร้างประสบการณ์ที่ดีให้กับผู้ใช้งาน",
    },
    sections: {
      skills: "ทักษะและเทคโนโลยี",
      portfolio: "ผลงาน",
      contact: "ติดต่อ",
      social: "ช่องทาง",
      contactTitle: "ผ่านทางอีเมล",
      socialTitle: "ช่องทางติดต่อ",
    },
    contact: {
      name: "ชื่อของคุณ",
      email: "อีเมลของคุณ",
      message: "ข้อความของคุณ",
      send: "ส่งข้อความ",
      sending: "กำลังส่ง...",
      required: "กรุณากรอกข้อมูลให้ครบถ้วน",
      emailNotConfigured: "ยังไม่ได้ตั้งค่า EmailJS",
      success: "ส่งข้อความเรียบร้อยแล้ว",
      failed: "ส่งไม่สำเร็จ",
    },
    projects: {
      work: {
        type: "ประสบการณ์ทำงาน",
        title: "พัฒนาเว็บแอปและโมบายแอป",
        description:
          "พัฒนาแพลตฟอร์มโลจิสติกส์แบบ full-stack สำหรับจัดการการรับซื้อน้ำมันใช้แล้วจากร้านค้า มีทั้ง Admin Dashboard บนเว็บสำหรับทีมปฏิบัติการ และ mobile application สำหรับผู้เก็บงานภาคสนาม",
      },
      ecommerce: {
        type: "โปรเจกต์ Full Stack",
        title: "เว็บ E-commerce",
        description:
          "เว็บ e-commerce ที่มีระบบยืนยันตัวตน จัดการสิทธิ์ตามบทบาท ตะกร้าสินค้า checkout และ Admin Dashboard สำหรับจัดการสินค้า คลังสินค้า และคำสั่งซื้อ",
      },
      todo: {
        type: "โปรเจกต์ฝึก Frontend",
        title: "Todo List Web App",
        description:
          "แอป To-Do List แบบ responsive สำหรับเพิ่ม ลบ แก้ไข และทำเครื่องหมายงานที่เสร็จแล้ว โดยเก็บข้อมูลใน LocalStorage และเน้น UI ที่สะอาดพร้อม state management ใน React",
      },
      restaurant: {
        type: "โปรเจกต์ฝึกใช้งาน API",
        title: "Restaurant Menu Web",
        description:
          "เว็บไซต์เมนูร้านอาหารที่ดึงข้อมูลเมนูและสูตรอาหารจาก external API ผู้ใช้สามารถดูเมนู รายละเอียดสูตร และสำรวจคอนเทนต์อาหารผ่าน UI ที่ใช้งานง่าย",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    common: {
      role: "Frontend Developer",
      downloadCv: "Download CV",
      prev: "Prev",
      next: "Next",
      tech: "Tech:",
    },
    hero: {
      greeting: "Hi, I'm Art",
      name: "Jirut Boonhai",
      descriptionBefore: "I build websites, web applications, and applications as a",
      descriptionAfter:
        "focused on clean interfaces, smooth usability, and thoughtful user experiences.",
    },
    sections: {
      skills: "Skills & Tech",
      portfolio: "Portfolio",
      contact: "Contact",
      social: "Social",
      contactTitle: "By Email",
      socialTitle: "Get in Touch",
    },
    contact: {
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      required: "Please fill in all fields",
      emailNotConfigured: "EmailJS is not configured",
      success: "Message sent successfully",
      failed: "Failed to send",
    },
    projects: {
      work: {
        type: "Work Experience",
        title: "Web App & Mobile App Development",
        description:
          "Developed a full-stack logistics platform for used-oil collection operations, including a web Admin Dashboard for management and a mobile application for field collectors to track tasks and routing.",
      },
      ecommerce: {
        type: "Full Stack Portfolio Project",
        title: "E-commerce Web",
        description:
          "A functional e-commerce web application with secure authentication, role-based access, dynamic cart management, checkout flow, and an Admin Dashboard for products, inventory, and orders.",
      },
      todo: {
        type: "Frontend Practice Project",
        title: "Todo List Web App",
        description:
          "A responsive To-Do List app built with Next.js and Tailwind CSS. Users can add, delete, edit, and complete tasks, with LocalStorage persistence across page reloads.",
      },
      restaurant: {
        type: "Practice Project",
        title: "Restaurant Menu Web",
        description:
          "A restaurant menu website using external APIs to fetch dynamic recipes and culinary content, letting users browse menus and view recipe details through a clean interface.",
      },
    },
  },
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
} | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("th");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "th" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    localStorage.setItem("language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "th" ? "en" : "th"),
      t: dictionaries[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
