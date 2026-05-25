import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <footer className="mt-10 border-t border-slate-200 py-10 text-center text-slate-500">
      <div className="flex justify-center gap-6 mb-3 text-xl">
        <a
          href="https://www.facebook.com/share/17EfDAsSFt/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:text-blue-600"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://github.com/artstyles-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:text-slate-950"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-sm">© 2025 ArtStyles. All rights reserved.</p>
      <div
        className="mt-2 block text-sm text-blue-600 transition-colors duration-200 hover:text-blue-700"
      >
        Tel: 095-776-9560
      </div>
    </footer>
  );
};

export default Social;
