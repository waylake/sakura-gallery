import React from "react";

interface CherryBlossomLoaderProps {
  darkMode: boolean;
}

const CherryBlossomLoader: React.FC<CherryBlossomLoaderProps> = ({
  darkMode,
}) => {
  return (
    <div
      className={`fixed inset-0 ${darkMode ? "bg-gray-900" : "bg-pink-100"} bg-opacity-75 flex justify-center items-center z-50`}
    >
      <div className="relative">
        <div
          className={`w-20 h-20 border-4 ${darkMode ? "border-pink-400" : "border-pink-300"} rounded-full animate-spin`}
        ></div>
        <div className="absolute top-0 left-0 w-20 h-20 flex justify-center items-center">
          <svg
            className={`w-12 h-12 ${darkMode ? "text-pink-400" : "text-pink-500"} animate-pulse`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
          </svg>
        </div>
      </div>
      <p
        className={`mt-4 text-lg font-semibold ${darkMode ? "text-pink-400" : "text-pink-700"}`}
      >
        Loading Sakuras
      </p>
    </div>
  );
};

export default CherryBlossomLoader;
