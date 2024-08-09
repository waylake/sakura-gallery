import React from "react";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`${
        darkMode ? "bg-gray-800 bg-opacity-80" : "bg-pink-200 bg-opacity-80"
      } text-center py-4 mt-8 backdrop-blur-md`}
    >
      <p>&copy; 2024 Sakura-Gallery | All rights reserved.</p>
    </footer>
  );
};

export default Footer;
