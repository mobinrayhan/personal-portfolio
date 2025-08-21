import HomePage from "@/components/home/home-main";
import { Metadata } from "next";

import homeOg from "@/assets/og-images/root-facebook.webp";

export const metadata: Metadata = {
  title: "Mobin | Full Stack Developer & Mobile App Developer",
  description:
    "Hi, I’m Mobin, a Full Stack Developer and Mobile App Developer. I build modern, fast, and scalable web and mobile applications. Explore my portfolio, projects, and professional experience.",
  keywords: [
    "Mobin",
    "Full Stack Developer",
    "Mobile App Developer",
    "Web Development",
    "Mobile App Development",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Portfolio",
    "Projects",
    "Software Developer",
  ],
  openGraph: {
    title: "Mobin | Full Stack Developer & Mobile App Developer",
    description:
      "Discover Mobin’s portfolio and projects. I build web and mobile applications using modern technologies with clean, scalable code.",
    url: "https://mobin.dev",
    siteName: "Mobin Portfolio",
    type: "website",
    images: [
      {
        url: homeOg.src,
        width: 1200,
        height: 630,
        alt: "Mobin Uddin | Full Stack & Mobile App Developer - Portfolio & Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobin | Full Stack Developer & Mobile App Developer",
    description:
      "Explore Mobin’s portfolio and projects. I build modern, scalable web and mobile applications.",
    images: [homeOg.src],
    creator: "@MobinRayhan",
  },
  other: {
    "og:image": homeOg.src,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt":
      "Mobin | Full Stack Developer & Mobile App Developer - Portfolio & Projects",
  },
};

export default function Home() {
  return <HomePage />;
}
