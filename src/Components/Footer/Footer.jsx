import React, { useContext } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { ThemeContext } from '../../Store/ThemeContext ';

const Footer = () => {
  const { theme, isDark } = useContext(ThemeContext);

  const glassStyle = `
    relative
    ${isDark 
      ? 'bg-gradient-to-br from-gray-900/70 to-gray-800/70' 
      : 'bg-gradient-to-br from-white/80 to-white/70'
    }
    shadow-xl
    border-t
    ${isDark ? 'border-gray-700/30' : 'border-gray-200/30'}
  `;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={`w-full ${glassStyle}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright Text */}
          <p className={`
            text-sm sm:text-base
            text-center sm:text-left
            ${isDark ? 'text-gray-300' : 'text-gray-600'}
          `}>
            Copyright © {new Date().getFullYear()} by{' '}
            <span className="text-amber-500 font-medium">Md Azharuddin</span>
            <span className="mx-2">|</span>
            All Rights Reserved.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className={`
              p-3
              rounded-full
              bg-amber-500
              text-white
              shadow-lg
              transform
              transition-all
              duration-300
              hover:bg-amber-600
              hover:scale-110
              focus:outline-none
              focus:ring-2
              focus:ring-amber-500
              focus:ring-offset-2
              group
            `}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="
              text-lg
              transition-transform
              duration-300
              group-hover:-translate-y-1
            " />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;