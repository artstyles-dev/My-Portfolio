"use client";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import toast from "react-hot-toast";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const toastStyle = {
  background: "rgba(255, 255, 255, 255)",
  backdropFilter: "blur(1px) saturate(180%)",
  borderRadius: "2rem",
  boxShadow:
    "0 20px 32px rgba(255, 255, 255, 0.365), inset 0 4px 20px rgba(255,255,255,0.049)",
  color: "black",
  padding: "1rem 1.5rem",
};

const getEmailJSErrorMessage = (error: unknown) => {
  if (
    typeof error === "object" &&
    error !== null &&
    "text" in error &&
    typeof error.text === "string"
  ) {
    return error.text;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown error";
};

const Contact = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [isSending, setIsSending] = useState(false);
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!name.trim() || !email.trim() || !message.trim()) {
          toast("กรุณากรอกข้อมูลให้ครบถ้วน", {
            style: toastStyle,
          });
          return;
        }

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
          toast("ยังไม่ได้ตั้งค่า EmailJS", {
            style: toastStyle,
          });
          return;
        }

        setIsSending(true);

        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              subject: name,
              title: name,
              name,
              from_name: name,
              email,
              from_email: email,
              reply_to: email,
              message,
              text: message,
            },
            {
              publicKey: EMAILJS_PUBLIC_KEY,
            }
          );

          setName("");
          setEmail("");
          setMessage("");

          toast("ส่งข้อความเรียบร้อยแล้ว", {
            style: toastStyle,
          });
        } catch (error) {
          const errorMessage = getEmailJSErrorMessage(error);
          console.error("EmailJS error:", error);
          toast(`ส่งไม่สำเร็จ: ${errorMessage}`, {
            style: toastStyle,
          });
        } finally {
          setIsSending(false);
        }
      };
  return (
        <div className="h-full my-10 mt-20">
      {/* Left: Form */}
      <div className="h-full flex flex-col mb-5">
        <h1 className="text-3xl font-bold mb-5">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 px-5 glassInput text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-3 px-5 glassInput text-white focus:outline-none"
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full p-5 glassInput text-white h-62 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isSending}
            className="w-full glass font-semibold py-3 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
