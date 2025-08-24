import withPWA from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [/middleware-manifest.json$/],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/mobin\.dev\/.*\.(png|jpg|jpeg|webp|svg)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "external-images-cache",
        expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    {
      urlPattern: /^https:\/\/mobin\.dev\/.*$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "external-api-cache",
        networkTimeoutSeconds: 10,
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
      },
    },
    {
      urlPattern: /^https:\/\/your-app-domain\.com\/_next\/static\/.*/,
      handler: "StaleWhileRevalidate",
      options: { cacheName: "next-static-cache" },
    },
  ],
});
//

export default {
  ...nextConfig,
  reactStrictMode: true,
  images: { domains: ["mobin.dev"] },
  env: {
    SMTP_HOST: "smtp.gmail.com",
    SMTP_PORT: 587,
    SMTP_USER: "rayhanuddinmobin2006@gmail.com",
    SMTP_PASSWORD: `vizu zvhz rslm kavh`,
    FROM_EMAIL: `rayhanuddinmobin2006@gmail.com`,
  },
};
