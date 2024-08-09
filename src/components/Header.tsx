import React from "react";
import { Trees, Moon, Sun } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  return (
    <header
      className={`${
        darkMode ? "bg-gray-800 bg-opacity-80" : "bg-pink-200 bg-opacity-80"
      } py-4 px-6 flex items-center justify-between backdrop-blur-md sticky top-0 z-20`}
    >
      <a href="/">
        <h1 className="text-2xl font-semibold flex items-center">
          <Trees className="mr-2" />
          Sakura Gallery
        </h1>
      </a>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${
            darkMode
              ? "bg-yellow-400 text-gray-900"
              : "bg-gray-700 text-yellow-400"
          }`}
          aria-label={darkMode ? "Light" : "Dark"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
