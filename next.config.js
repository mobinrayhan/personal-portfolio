import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    // Cache static Next.js assets (JS, CSS, etc.)
    {
      urlPattern: /^https:\/\/mobin\.dev\/_next\/static\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
        cacheableResponse: { statuses: [0, 200] },
      },
    },
    // Cache HTML pages
    {
      urlPattern: /^https:\/\/mobin\.dev\/.*$/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "html-cache",
        networkTimeoutSeconds: 3,
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
        cacheableResponse: { statuses: [0, 200] },
      },
    },
    // Cache Images
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days
        },
        cacheableResponse: { statuses: [0, 200] },
      },
    },
    // Cache Fonts
    {
      urlPattern: /^https:\/\/fonts\.(?:gstatic|googleapis)\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "font-cache",
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
  ],
})(nextConfig);
