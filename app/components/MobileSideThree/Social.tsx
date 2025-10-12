import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <footer className="text-gray-300 py-10 mt-10 text-center border-t border-gray-800">
      <div className="flex justify-center gap-6 mb-3 text-xl">
        <a
          href="https://www.facebook.com/share/17EfDAsSFt/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://github.com/artstyles-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-sm">© 2025 ArtStyles. All rights reserved.</p>
      <div
        className="text-sm text-amber-400 hover:text-amber-500 transition-colors duration-200 block mt-2"
      >
        Tel: 095-776-9560
      </div>
    </footer>
  );
};

export default Social;