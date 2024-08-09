import React, { useState, useEffect } from "react";
import { Image } from "../types/image";
import { X } from "lucide-react";
import { getProxyImageUrl } from "../utils/imageProxy";

interface ImageModalProps {
  image: Image;
  onClose: () => void;
  darkMode: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  onClose,
  darkMode,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
    setError(null);
  };

  const handleImageError = () => {
    setError("Failed to load image. Please try again later.");
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-75"
        onClick={handleClose}
      ></div>
      <div
        className={`relative max-w-4xl w-full bg-opacity-90 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        } ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        {!isLoaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center text-red-500">
            {error}
          </div>
        )}
        <img
          src={getProxyImageUrl(image.webformatURL)}
          alt={image.tags}
          className={`w-full h-auto object-contain ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        <div
          className={`absolute top-0 left-0 right-0 p-4 bg-gradient-to-b ${
            darkMode ? "from-gray-900" : "from-white"
          } to-transparent`}
        >
          <p
            className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            {image.tags}
          </p>
        </div>
        <button
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-200 ${
            darkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-white hover:bg-gray-100"
          }`}
          onClick={handleClose}
          aria-label="이미지 닫기"
        >
          <X
            className={`w-6 h-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          />
        </button>
        <div
          className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t ${
            darkMode ? "from-gray-900" : "from-white"
          } to-transparent`}
        ></div>
      </div>
    </div>
  );
};

export default ImageModal;
