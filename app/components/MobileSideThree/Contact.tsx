"use client";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const toastStyle = {
  background: "rgba(255, 255, 255, 0.96)",
  border: "1px solid rgba(15, 23, 42, 0.1)",
  borderRadius: "1rem",
  boxShadow: "0 20px 50px rgba(15, 23, 42, 0.12)",
  color: "#111827",
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
      const { t } = useLanguage();
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [isSending, setIsSending] = useState(false);
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!name.trim() || !email.trim() || !message.trim()) {
          toast(t.contact.required, {
            style: toastStyle,
          });
          return;
        }

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
          toast(t.contact.emailNotConfigured, {
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

          toast(t.contact.success, {
            style: toastStyle,
          });
        } catch (error) {
          const errorMessage = getEmailJSErrorMessage(error);
          console.error("EmailJS error:", error);
          toast(`${t.contact.failed}: ${errorMessage}`, {
            style: toastStyle,
          });
        } finally {
          setIsSending(false);
        }
      };
  return (
        <div className="my-10 mt-20 h-full">
      {/* Left: Form */}
      <div className="h-full flex flex-col mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{t.sections.contact}</p>
        <h1 className="mb-5 mt-2 text-3xl font-bold text-slate-950">
          {t.sections.contactTitle}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.contact.name}
            className="w-full rounded-2xl p-3 px-5 text-slate-950 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.contact.email}
            className="w-full rounded-2xl p-3 px-5 text-slate-950 focus:outline-none"
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.contact.message}
            className="h-62 w-full rounded-2xl p-5 text-slate-950 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isSending}
            className="w-full rounded-2xl bg-slate-950 py-3 font-semibold text-white shadow-lg shadow-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? t.contact.sending : t.contact.send}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
