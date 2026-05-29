"use client";

import React from "react";
import {
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const ContactMe = () => {
  const { t } = useLanguage();

  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-full">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{t.sections.social}</p>
        <h1 className="mb-5 mt-3 text-center text-5xl font-bold text-slate-950 xl:text-6xl">
          {t.sections.socialTitle}
        </h1>

        {/* Right: Contact Info */}
        <div className="glassPopup p-5 lg:p-10 xl:p-13 2xl:p-15">
          <div className="space-y-10 text-slate-600 md:space-y-5">
            <a
              href="https://www.facebook.com/share/17EfDAsSFt/?mibextid=wwXIfr"
              target="_blank"
              className="flex items-center gap-4 duration-300 hover:text-blue-600"
            >
              <FaFacebook size={24} />
              <span className=" transform duration-300 hover:scale-105">
                facebook.com/Art Art
              </span>
            </a>
            <a
              href="https://github.com/artstyles-dev"
              target="_blank"
              className="flex items-center gap-4 duration-300 hover:text-blue-600"
            >
              <FaGithub size={24} />
              <span className=" transform duration-300 hover:scale-105">
                github.com/artstyles-dev
              </span>
            </a>
            <div className="flex items-center gap-4">
              <FaEnvelope size={24} />
              <span>artstyles.dev@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone size={24} />
              <span>+66 95-776-9560</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
