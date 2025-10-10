import React from 'react'
import { FaFacebook, FaLine, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="flex h-full justify-center items-center md:p-10 lg:p-20 xl:p-30">
      <div className="h-full">
        <h1 className="text-5xl xl:text-6xl font-bold text-center mb-5">Get in Touch</h1>

      {/* Right: Contact Info */}
      <div className="glassPopup p-5 lg:p-10 xl:p-13 2xl:p-15">
        <div className="md:space-y-5 space-y-10 text-gray-200">
          <a href='https://www.facebook.com/share/17EfDAsSFt/?mibextid=wwXIfr' target='_blank' 
          className="flex items-center gap-4 transform duration-300 hover:scale-105">
            <FaFacebook size={24} />
            <span className=" transform duration-300 hover:scale-105">facebook.com/Art Art</span>
          </a>
          <div className="flex items-center gap-4">
            <FaLine size={24} />
            <span>ID:arttie24</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone size={24} />
            <span>+66 95-776-9560</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope size={24} />
            <span>artstyles.dev@gmail.com</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ContactMe