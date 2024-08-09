import React, { useState, useCallback, useEffect } from "react";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import CherryBlossomLoader from "./CherryBlossomLoader";
import { useImageFetch } from "../hooks/useImageFetch";
import { Image } from "../types/image";

interface ImageGalleryProps {
  darkMode: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ darkMode }) => {
  const { images, hasMore, loadMore } = useImageFetch();
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [showLoader, setShowLoader] = useState(false);
  const [loadingTimer, setLoadingTimer] = useState<number | null>(null);

  const handleLoadMore = useCallback(() => {
    setShowLoader(true);
    const timerId = window.setTimeout(() => {
      loadMore();
      setShowLoader(false);
    }, 1000);
    setLoadingTimer(timerId);
  }, [loadMore]);

  useEffect(() => {
    return () => {
      if (loadingTimer !== null) {
        window.clearTimeout(loadingTimer);
      }
    };
  }, [loadingTimer]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <InfiniteScroll
        dataLength={images.length}
        next={handleLoadMore}
        hasMore={hasMore}
        loader={null}
        endMessage={<p className="text-center mt-4">No more Sakuras!</p>}
        scrollThreshold={0.9}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(image)}
              darkMode={darkMode}
            />
          ))}
        </Masonry>
      </InfiniteScroll>
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          darkMode={darkMode}
        />
      )}
      {showLoader && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <CherryBlossomLoader darkMode={darkMode} />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
