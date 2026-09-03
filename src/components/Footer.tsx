import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { useDarkMode } from "@/context/DarkModeContext";

const Footer: React.FC = () => {
  // @ts-expect-error: TS1234 because the library definition is wrong
  const { isDarkMode } = useDarkMode();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-blue-50 border-t border-gray-200'} w-full pt-12 pb-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Made with <AiFillHeart className="inline text-red-500 mx-0.5" /> from Serene
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ubet123"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>
            <a
              href="http://www.linkedin.com/in/serene-dmello-572605344"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
            >
              <FaLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
