import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useDarkMode } from "@/context/DarkModeContext";


const Footer: React.FC = () => {

    const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <footer className={` ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} w-full pt-20 pb-8  text-center`}>
      <div className="flex justify-center items-center space-x-6">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Made with <span className="text-red-500">❤️</span> from Serene
        </p>
        <a
          href="https://github.com/ubet123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <FaGithub className="text-xl mr-1" />
          <span className="text-sm">GitHub</span>
        </a>
        <a
          href="http://www.linkedin.com/in/serene-dmello-572605344"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <FaLinkedin className="text-xl mr-1" />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
