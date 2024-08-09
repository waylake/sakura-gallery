import React, { useRef, useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import Sakura from "./components/Sakura";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.minHeight = `${window.innerHeight}px`;
    }
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-pink-50 text-gray-900"
      } transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className="fixed inset-0 bg-cover bg-center z-0 opacity-50"
        style={{ backgroundImage: "url('/background.svg')" }}
      />
      <Sakura windSpeed={1} />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main ref={mainRef} className="container mx-auto px-4 py-8 flex-grow">
          <ImageGallery darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
