"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const InputMe = () => {
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast("กรุณากรอกข้อมูลให้ครบถ้วน", {
        style: {
          background: "rgba(255, 255, 255, 255)",
          backdropFilter: "blur(1px) saturate(180%)",
          borderRadius: "2rem",
          boxShadow:
            "0 20px 32px rgba(255, 255, 255, 0.365), inset 0 4px 20px rgba(255,255,255,0.049)",
          color: "black",
          padding: "1rem 1.5rem",
        },
      });
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <div className="h-full md:p-10 lg:p-20 xl:p-30">
      {/* Left: Form */}
      <div className="h-full flex flex-col justify-start items-center">
        <h1 className="text-5xl xl:text-6xl font-bold text-center mb-5">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 px-5 glassPopup text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-3 px-5 glassPopup text-white focus:outline-none"
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full p-5 glassPopup text-white h-62 focus:outline-none"
          />
          <button type="submit" className="w-full glass font-semibold py-3">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputMe;
