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
        maxEntries: 200,
        maxAgeSeconds: 60 * 24 * 60 * 60, // 60 Days
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
        maxEntries: 100,
        maxAgeSeconds: 60 * 24 * 60 * 60,
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern: /^https:\/\/mobin\.dev\/_next\/static\/.*/i,
    handler: "CacheFirst",
    options: {
      cacheName: "next-static",
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
      },
      cacheableResponse: {
        statuses: [0, 200],
      },
    },
  },
  {
    urlPattern: /^https:\/\/fonts\.(?:gstatic|googleapis)\.com\/.*/i,
    handler: "CacheFirst",
    options: {
      cacheName: "google-fonts",
      expiration: {
        maxEntries: 30,
        maxAgeSeconds: 365 * 24 * 60 * 60,
      },
    },
  },
  {
    urlPattern: /^https:\/\/mobin\.dev\/.*/i,
    handler: "NetworkFirst", // so updates come when online
    options: {
      cacheName: "pages-cache",
      networkTimeoutSeconds: 3,
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
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
