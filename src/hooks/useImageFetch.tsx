import { useState, useEffect, useCallback } from "react";
import { Image } from "../types/image";

interface CacheItem {
  data: Image[];
  timestamp: number;
}

interface FetchResponse {
  total: number;
  totalHits: number;
  hits: Image[];
}

const CACHE_DURATION = 60 * 60 * 1000; // 60 minutes
const API_URL = "/api/images"; // Proxy API endpoint

export const useImageFetch = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = useCallback(async (pageNum: number) => {
    setIsLoading(true);
    setError(null);
    const cacheKey = `cherry-blossom-images-page-${pageNum}`;

    try {
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        const { data, timestamp }: CacheItem = JSON.parse(cachedData);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setImages((prevImages) => [...prevImages, ...data]);
          setIsLoading(false);
          return;
        }
      }

      const response = await fetch(`${API_URL}?page=${pageNum}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: FetchResponse = await response.json();
      const newImages = data.hits;

      if (newImages.length === 0) {
        setHasMore(false);
      } else {
        setImages((prevImages) => [...prevImages, ...newImages]);
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ data: newImages, timestamp: Date.now() }),
        );
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setError(
        error instanceof Error ? error.message : "An unknown error occurred",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore && !error) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isLoading, hasMore, error]);

  useEffect(() => {
    fetchImages(page);
  }, [fetchImages, page]);

  return { images, hasMore, loadMore, isLoading, error };
};
