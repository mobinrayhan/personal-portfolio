import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const runtimeCaching = [
  {
    urlPattern: /^https:\/\/mobin\.dev\/.*\.(png|jpg|jpeg|webp|svg|gif|ico)$/,
    handler: "CacheFirst",
    options: {
      cacheName: "image-cache",
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern: /^https:\/\/mobin\.dev\/_next\/image\?.*$/,
    handler: "CacheFirst",
    options: {
      cacheName: "next-image-cache",
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
];

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  runtimeCaching,
})(nextConfig);
