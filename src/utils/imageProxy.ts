export const getProxyImageUrl = (originalUrl: string) => {
  return `/api/image-proxy?url=${encodeURIComponent(originalUrl)}`;
};
