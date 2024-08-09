import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { Image } from "../types/image";
import { getProxyImageUrl } from "../utils/imageProxy";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
  darkMode: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick, darkMode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`mb-4 relative overflow-hidden rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      {!isLoaded && (
        <div
          className={`absolute inset-0 ${darkMode ? "bg-gray-700" : "bg-gray-200"} animate-pulse`}
          style={{ height: "200px" }}
        ></div>
      )}
      <LazyLoad once height={200} offset={100}>
        <img
          src={getProxyImageUrl(image.webformatURL)}
          alt={image.tags}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-auto cursor-pointer transition-transform duration-300 hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onClick={onClick}
        />
      </LazyLoad>
    </div>
  );
};

export default ImageCard;
