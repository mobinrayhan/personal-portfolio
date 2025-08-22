import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteData } from "@/data/site";
import { PRODUCTION_SITE_URL } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const ogPreviewImage =
  PRODUCTION_SITE_URL + "/og-images" + "/root-facebook.webp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteData.name,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  keywords: [
    "full stack developer",
    "web developer",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteData.url,
    title: siteData.name,
    description: siteData.description,
    siteName: siteData.name,
    images: [
      {
        url: ogPreviewImage,
        width: 1200,
        height: 630,
        alt: siteData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.name,
    description: siteData.description,
    images: [ogPreviewImage],
    creator: "@MobinRayhan",
  },
  other: {
    "og:image": ogPreviewImage,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": siteData.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={siteData.url} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <script
        defer
        src="https://umami-stats.editors.academy/script.js"
        data-website-id="aeaa6851-ea51-47da-878a-1a8e28aa822e"
      ></script>
    </html>
  );
}
