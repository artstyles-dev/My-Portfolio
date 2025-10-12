import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400"],

})

export const metadata: Metadata = {
  title: "Art Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${prompt.className} sm:container sm:overflow-hidden sm:h-[100dvh] sm:mx-auto sm:py-10 sm:flex sm:items-center sm:justify-center`}>
        <div className="h-full flex justify-center items-center overflow-hidden glassPopup">
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </body>
    </html>
  );
}
