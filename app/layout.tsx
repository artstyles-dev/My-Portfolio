import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  title: "Jirut Boonhai | Frontend Developer",
  description: "Clean portfolio website for Jirut Boonhai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="sm:overflow-hidden sm:h-[100dvh] sm:flex sm:items-center sm:justify-center">
        <div className="portfolio-shell h-full w-full sm:h-[calc(100dvh-48px)] sm:w-[min(1440px,calc(100vw-48px))] flex justify-center items-center overflow-hidden sm:rounded-[28px] sm:border sm:border-slate-200/80 sm:bg-white/55 sm:shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:backdrop-blur-2xl">
          <LanguageProvider>
            {children}
            <Toaster position="top-center" reverseOrder={false} />
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
